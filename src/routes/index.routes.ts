import { FastifyInstance } from 'fastify';
import { authRoutes } from '../modules/auth/auth.route';
import { usersRoutes } from '../modules/users/users.route';
import { propertyRoutes } from '../modules/property/property.route';
import { cashRoutes } from '../modules/cash/cash.route';
//import { helloRoutes } from './hello.route';

export const apiRoutes = async (fastify: FastifyInstance) => {
	//fastify.register(helloRoutes, { prefix: '/hello' });
	fastify.register(authRoutes, { prefix: '/auth' });
	fastify.register(usersRoutes, { prefix: '/users' });
	fastify.register(propertyRoutes, { prefix: '/property' });
	fastify.register(cashRoutes, { prefix: '/cash' });
};
