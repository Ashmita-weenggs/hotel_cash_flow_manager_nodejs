import { FastifyRequest, FastifyReply } from 'fastify';
import { request } from 'http';
import { CreateUserBody } from '../users/users.schema';
import { Log } from '../../utils/console_log.utils';
import { error } from 'console';
import { adminCreatePropertyService } from './property.service';
import { createPropertyBody } from './property.schema';


export async function admincreatePropertyController(
    request: FastifyRequest<{ Body: createPropertyBody }>,
	reply: FastifyReply
){
    // try {
    //     Log.debug("request.user",request.user);
    //     const isAdmin=request.user.role_id===1;
    //     console.log("isAdmin",isAdmin);

    //     const data=request.body;
    //     const res=await adminCreatePropertyService(isAdmin,data);

    //     if(res instanceof Error){
    //         throw res
    //     }

    //     if(res){
    //         return {
    //             status:true,
    //             message:"Property created"
    //         }
    //     }

    // } catch (error) {
    //     return error;
    // }


    try {
		const data = request.body;
		const { property, isError, error } = await adminCreatePropertyService(data);

		if (isError) {
			return reply.status(409).send({
				status: false,
				message: error.message,
			});
		}
		if (property) {
			return {
				status: true,
				message: 'Property created',
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