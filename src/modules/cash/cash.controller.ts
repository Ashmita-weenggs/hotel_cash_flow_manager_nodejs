import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserBody } from '../users/users.schema';
import { manageCashService } from './cash.service';
import { manageCashBody, manageCashParamsBody } from './cash.schema';

export async function manageCashController(
	request: FastifyRequest<{
		Body: manageCashBody;
		Params: manageCashParamsBody;
	}>,
	reply: FastifyReply
) {
	try {
		
		const data = request.body;
		const cash_id = request.params.cash_id;
		const { cash_detail, isError, error } = await manageCashService(data, cash_id);
		if (isError) {
			return reply.status(409).send({
				status: false,
				message: error.message,
			});
		}
		if (cash_detail) {
			return {
				status: true,
				message: 'cash generated',
			};
		}
	} catch (error) {
		console.log(error);
		if (error instanceof Error) {
			return reply.status(500).send({
				status: false,
				message: error.message ?? 'Internal Server Error',
			});
		}
	}
}
