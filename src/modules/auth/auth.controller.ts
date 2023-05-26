import { FastifyReply, FastifyRequest } from 'fastify';
import { AdminLoginBody } from './auth.schema';
import { adminCreateUserService, adminLoginService } from './auth.service';
import { CreateUserBody } from '../users/users.schema';
import { Log } from '../../utils/console_log.utils';

export async function adminLoginController(
	request: FastifyRequest<{ Body: AdminLoginBody }>,
	reply: FastifyReply
) {
	try {
		const { username, password } = request.body;
		const jwt = request.jwt;

		Log.debug("jwt", jwt)

		const access_token = await adminLoginService(jwt, {
			username,
			password,
		});


		Log.debug("access_token", access_token)

		if (access_token instanceof Error) {
			throw access_token;
		}

		return {
			status: true,
			data: {
				access_token,
			},
		};
	} catch (error) {
		return error
	}
}
export async function adminCreateUserController(
	request: FastifyRequest<{ Body: CreateUserBody }>,
	reply: FastifyReply
) {
	try {
		Log.debug("request.user", request.user)
		const isAdmin = request.user.role_id === 1;
		console.log('isAdmin', isAdmin);



		const data = request.body;
		const res = await adminCreateUserService(isAdmin, data);
		console.log('res', res);

		if (res instanceof Error) {
			throw res;
		}
		if (res) {
			return {
				status: true,
				message: 'User for General Manager created Succesfully!',
			};
		}
	} catch (error) {
		return error;
	}
}
