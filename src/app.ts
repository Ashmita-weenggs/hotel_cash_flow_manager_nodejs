import Fastify, {
	FastifyReply,
	FastifyRequest,
	FastifyServerOptions,
} from 'fastify';
import { userSchemas } from './modules/users/users.schema';
import { apiRoutes } from './routes/index.routes';
import { adminSchemas } from './modules/auth/auth.schema';
import fjwt, { VerifyPayloadType } from '@fastify/jwt';
import { db } from './utils/db.utils';
import { Log } from './utils/console_log.utils';
import { propertySchemas } from './modules/property/property.schema';
import { manageCashSchemas } from './modules/cash/cash.schema';

//import { apiRoutes } from './routes/index.routes';

//customize and colorize the log
const logger: FastifyServerOptions['logger'] = {
	level: 'debug',
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
			sync: true,
			translateTime: 'yyyy-mm-dd HH:MM:ss.l',
			ignore: 'pid,hostname,reqId,plugin',
			levelFirst: true,
		},
	},
};
const fastify = Fastify({ logger });

//set all schemas
for (const schema of [
	...userSchemas,
	...adminSchemas,
	...propertySchemas,
	...manageCashSchemas,
]) {
	fastify.addSchema(schema);
}

//jwt plugin
fastify.register(fjwt, {
	secret: 'ndkandnan78duy9sau87dbndsa89u7dsy789adb',
});

fastify.decorate(
	'authenticate',
	async (
		request: FastifyRequest,
		reply: FastifyReply
	): Promise<Error | VerifyPayloadType> => {
		try {
			const payload = (await request.jwtVerify()) as FastifyRequest['user'];

			//TODO:validation pending...

			request.user = payload;

			Log.debug('payload', payload);
			Log.debug('request.user', request.user);
			return payload;
		} catch (e) {
			return reply.send(e);
		}
	}
);

fastify.addHook('preHandler', (req, reply, next) => {
	Log.debug('preHandler', 'ok');
	req.jwt = fastify.jwt;
	Log.debug('req.jwt', req.jwt);
	return next();
});

//set routes here
fastify.register(apiRoutes, { prefix: '/api' });

export const app = fastify;
