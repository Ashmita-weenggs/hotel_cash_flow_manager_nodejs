
import { buildJsonSchemas } from 'fastify-zod';

import { z } from 'zod';

export const EnvSchema = z.object({
	PORT: z.number().default(3001),
	JWT_SECRET: z.string(),
	DEBUG_MODE: z.number(),
	LOG_MODE: z.number(),
	
	LOG_FOLDER: z.string(),
	SESSION_SECRET: z.string(),
	DATABASE_URL: z.string(),
	

	
});

export type ENV = z.infer<typeof EnvSchema>;

// export const envSchema = zodToJsonSchema(EnvSchema, 'envSchema');
export const { schemas: envSchemas } = buildJsonSchemas(
	{
		EnvSchema,
	},
	{ $id: '$envSchema' }
);

export const tokenSchema = z.object({
	authorization: z
		.string()
		.regex(/^Bearer [A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/),
});

export type TokenSchema = z.infer<typeof tokenSchema>;

export const { schemas: tokenSchemas, $ref: $tokenRef } = buildJsonSchemas(
	{
		tokenSchema,
	},
	{ $id: 'tokenSchemas' }
);

export const globalQueryStringSchema = z.object({
	sql: z.number().min(0).max(1).optional(),
});

export type globalQueryString = z.infer<typeof globalQueryStringSchema>;

export const {
	schemas: globalQueryStringSchemas,
	$ref: $globalQueryStringRef,
} = buildJsonSchemas(
	{
		globalQueryStringSchema,
	},
	{ $id: 'sqlQueryStringSchemas' }
);

export * from '../modules/auth/auth.schema';