import { db } from '../../utils/db.utils';
import { CF_Error } from '../../utils/error-handler.utils';
import { CreateUserBody } from '../users/users.schema';
import { AdminLoginBody } from './auth.schema';

import { FastifyRequest } from 'fastify/types/request';
import { Log } from '../../utils/console_log.utils';

export const adminLoginService = async (
	jwt: FastifyRequest['jwt'],
	data: AdminLoginBody
) => {
	//check valid admin
	const user = await db.tbl_users.findFirst({
		where: {
			email: data.email,
			password: data.password,
			role_id: 1, //1 for admin..2 for any other user
		},
	});

	Log.debug('user', user);

	if (!user) {
		return CF_Error({ statusCode: 401 });
	}

	const access_token = await jwt?.sign(
		{
			username: user.username,
			user_id: user.id,
			role_id: user.role_id,
		},
		{ expiresIn: '1y' }
	);

	Log.debug('access_token', access_token);

	return access_token;
};
export const adminCreateUserService = async (
	isAdmin: boolean,
	data: CreateUserBody
) => {
	//check valid admin
	if (!isAdmin) {
		// const error = new Error('You do not ahve permision to create a user');
		// result.isError = true;
		// result.error = error;

		return CF_Error({
			message: 'You do not ahve permision to create a user',
			statusCode: 403,
		});
	} else {
		data;
		const user = await db.tbl_users.create({
			data: {
				...data,
				password: '123',
			},
		});
		return user;
	}
};
