import { FastifyInstance } from 'fastify';
import { requestValidator } from '../../utils/validator.utils';
import { createUserController, updateUserController } from './user.controller';
import { $userSchemaRef, createUserSchema, updateUserSchema } from './users.schema';


export async function usersRoutes(fastify: FastifyInstance) {
	//  /api/users

	//route for get all users
	fastify.get('/', async (request, reply) => {
		return { user: 'user' };
	});
	//route for get a single users by id
	fastify.get('/:id', async (request, reply) => {
		return { user: 'user' };
	});
	//route for creating a new user
	fastify.post(
		'/',
		{
			schema: {
				body: $userSchemaRef('createUserBodySchema'),
			},
			preValidation: async (req, res) =>
				await requestValidator(req, res, { schema: createUserSchema }),
		},
		createUserController
		
	);
	//route for updating a user
	// fastify.put('/:id', async (request, reply) => {
	// 	return { user: 'user' };
	// });

	fastify.put(
		'/:id',
		{
			schema: {
				body: $userSchemaRef('updateUserBodySchema'),
				params:$userSchemaRef('updateUserParamsSchema')
			},
			preValidation: async (req, res) =>
				await requestValidator(req, res, { schema: updateUserSchema }),
		},
		updateUserController
		
	);

	

	//route for deleting a new user
	fastify.delete('/:id', async (request, reply) => {
		return { user: 'user' };
	});
}
