import { FastifyReply, FastifyRequest } from 'fastify';
import { createUserService, updateUserService } from './user.service';
import { CreateUserBody, UpdateUserBody, UpdateUserParams } from './users.schema';
export async function createUserController(
	request: FastifyRequest<{ Body: CreateUserBody }>,
	reply: FastifyReply
) {
	try {
		const data = request.body;
		const { user, isError, error } = await createUserService(data);

		if (isError) {
			return reply.status(409).send({
				status: false,
				message: error.message,
			});
		}
		if (user) {
			return {
				status: true,
				message: 'User created',
			};
		}
	} catch (error) {
		console.log(error);
		if (error instanceof Error) {
			return reply.status(500).send({
				success: false,
				message: error.message ?? 'Internal Server Error',
			});
		}
	}
}


export async function updateUserController(
	request: FastifyRequest<{ Body: UpdateUserBody,Params:UpdateUserParams
	 }>,
	reply: FastifyReply
){
	try {
		const data=request.body;
		const id=request.params.id;
		const { user, isError, error }=await updateUserService(data,id);
		if(isError){
			return reply.status(409).send({
				status: false,
				message: error.message,
			});
		}
		if(user){

			
			return {
				status: true,
				message: 'User updated',
			};
		}
	} catch (error) {
		console.log(error);
		if(error instanceof Error){
			return reply.status(500).send({
				success:false,
				message:error.message??'Internal Server Error',
			});
		}
	}
}