import { CF_Error } from "../../utils/error-handler.utils";
import { createPropertyBody } from "./property.schema";
import { db } from '../../utils/db.utils'
import { tbl_properties } from "@prisma/client";


export const adminCreatePropertyService = async(
    //isAdmin:boolean,
    data:createPropertyBody
)=>{
    let result:any={}
    const propertyExists=await db.tbl_properties.findFirst({
        where:{
            OR:{property_address:data.property_address}
        },
    });
    if(propertyExists){
        const error = new Error('property already in use');
        result.isError = true;
		result.error = error;
    }

    else{
        data;
        const property=await db.tbl_properties.create({
            data:{
                ...data
            }
        });
        if(property){
            result.property=property
        }
     }

     return result as { property: tbl_properties; isError: boolean; error: Error };
    // if(!isAdmin){
    //     return CF_Error({
    //         message:"You do not have permission to create property",
    //         statusCode:403
    //     })
    // }
   
}