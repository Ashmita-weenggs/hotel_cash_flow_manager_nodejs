import { FastifyInstance } from 'fastify';
import { requestValidator } from '../../utils/validator.utils';
import {
	adminCreateUserController,
	adminLoginController,
} from './auth.controller';
import { $adminSchemaRef, loginSchema } from './auth.schema';
import { $userSchemaRef, createUserSchema } from '../users/users.schema';

export async function authRoutes(fastify: FastifyInstance) {
	// /api/auth/admin: route for signin as an admin

	// server.post(
	// 	'/',
	// 	{
	// 		schema: {
	// 			tags: ['Auth'],
	// 			body: $userRef('loginSchema'),
	// 			response: {
	// 				200: $userRef('loginResponseSchema'),
	// 			},
	// 		},
	// 	},
	// 	loginHandler
	// );
	fastify.post(
		'/admin',
		{
			schema: {
				tags: ['Auth'],
				body: $adminSchemaRef('loginSchema'),
			},
			preValidation: async (req, res) =>
				await requestValidator(req, res, { schema: loginSchema }),
		},
		adminLoginController
	);

	// /api/auth/admin/create-user: route for creating a user as an admin
	fastify.post(
		'/admin/create-user',
		{
			schema: {
				tags: ['CreateUser'],
				body: $adminSchemaRef('createUserSchema'),
			},
			preValidation: async (req, res) =>
				await requestValidator(req, res, { schema: createUserSchema }),
			preHandler: [fastify.authenticate],
		},
		adminCreateUserController
	);

	


	// fastify.post(
	// 	'/token',
	// 	{
	// 		schema: {
	// 			tags: ['Auth'],
	// 			// body: $userRef('tokenSchema'),
	// 			// headers
	// 			response: {
	// 				200: $adminSchemaRef('tokenResponseSchema'),
	// 			},
	// 		},
	// 	},
	// 	tokenHandler
	// );
}
