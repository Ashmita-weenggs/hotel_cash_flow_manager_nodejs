import { JWT } from '@fastify/jwt';
import { ENV } from '../schemas';

export declare module 'fastify' {
	interface FastifyRequest {
		jwt: JWT;
	}
	export interface FastifyInstance {
		authenticate: any;
	}
}

interface CurrentUser {
	user_id: number;
	email: string;
	role_id: 1 | 2; //1 for admin, 2 for GM
}

export declare module '@fastify/jwt' {
	interface FastifyJWT {
		user: CurrentUser;
	}
}

export declare module 'fastify' {
	interface FastifyInstance {
		config: ENV;
		currentUser: CurrentUser;
	}
}

export declare module 'fastify' {
	interface Session {
		userRolePermission: {
			[r: string]: {
				modules: {
					[m: string]: {
						can_read: 0 | 1;
						can_write: 0 | 1;
						full_access: 0 | 1;
					};
				};
			};
		}[];
	}
}
export declare module 'fastify' {
	interface FastifyInstance {
		readonly zod: FastifyZod<typeof models>;
	}
}
