import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';
import { createUserSchema } from '../users/users.schema';

//zod schemas
export const createSchema = z.object({
	username:z.string(),
	email: z.string().optional(),
	password: z.string(),
});
export const loginSchema = createSchema

export const tokenSchema=z.object({
    accessToken:z.string(),
    refreshToken:z.string(),

})

export const tokenResponseSchema=tokenSchema


export type AdminCreateBody = z.infer<typeof createSchema>;
export type AdminLoginBody = z.infer<typeof loginSchema>;
export type token = z.infer<typeof tokenSchema>


//end of generate types for typescript

//generate schema for fastify use
export const { schemas: adminSchemas, $ref: $adminSchemaRef } =
	buildJsonSchemas(
		{
			 createSchema,
             loginSchema,
             createUserSchema:createUserSchema,
             tokenResponseSchema,
		},
		{ $id: 'adminSchemas' }
	); 
