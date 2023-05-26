import { tbl_users } from '@prisma/client';
import { db } from '../../utils/db.utils';
import { CreateUserBody, UpdateUserBody } from './users.schema';
import { request } from 'http';

export const createUserService = async (data: CreateUserBody) => {
	let result: any = {};
	//check username or email is already taken
	const userExists = await db.tbl_users.findFirst({
		where: {
			OR: [ { username: data.username }],
		},
	});

	if (userExists) {
		const error = new Error('email or username already in use');
		result.isError = true;
		result.error = error;
	} else {
		const user = await db.tbl_users.create({
			data,
		});

		if (user) {
			result.user = user;
		}
	}

	return result as { user: tbl_users; isError: boolean; error: Error };
};

export const  updateUserService=async(data:UpdateUserBody,id:number)=>{
	let result:any={};
	const userExists=await db.tbl_users.findFirst({
		where:{
			id,
		},
	});

	
			const user = await db.tbl_users.update({
				data,
				where:{
					id
				}
			});

		if (user) {
			result.user = user;
		}
		
		return result as { user: tbl_users; isError: boolean; error: Error };
	
}
