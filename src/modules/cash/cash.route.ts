import { FastifyInstance } from 'fastify';
import { $manageCashSchemaRef, manageCashSchema } from './cash.schema';
import { requestValidator } from '../../utils/validator.utils';
import { updateUserController } from '../users/user.controller';
import { $userSchemaRef, updateUserSchema } from '../users/users.schema';
import { manageCashController } from './cash.controller';

export async function cashRoutes(fastify: FastifyInstance) {
	fastify.put(
		'/:cash_id',
		{
			schema: {
				body: $manageCashSchemaRef('manageCashSchema'),
				params: $manageCashSchemaRef('manageCashParamsSchema'),
			},
			preValidation: async (req, res) =>
				await requestValidator(req, res, { schema: manageCashSchema }),
		},
		manageCashController
	);
}
