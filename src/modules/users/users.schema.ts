import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

//zod schemas
export const createUserSchema = z.object({
	username: z.string(),
	 email: z.string(),
	role_id: z.number(), //required
	fullname: z.string().optional(),
	 phone_no: z.string().optional(),
});
 export const updateUserSchema=z.object({
	username:z.string(),
	email:z.string(),
	fullname:z.string(),
	phone_no:z.string(),
 })

 export const updateUserParamsSchema=z.object({
	id:z.number(),
 })


export type CreateUserBody = z.infer<typeof createUserSchema>;

export type UpdateUserBody=z.infer<typeof updateUserSchema>;

export type UpdateUserParams=z.infer<typeof updateUserParamsSchema>

//end of generate types for typescript

//generate schema for fastify use
export const { schemas: userSchemas, $ref: $userSchemaRef } = buildJsonSchemas(
	{
		createUserBodySchema: createUserSchema,
		updateUserBodySchema:updateUserSchema,
		updateUserParamsSchema:updateUserParamsSchema
	},
	{ $id: 'userSchemas' }
);

// end of generate schema for fastify use
