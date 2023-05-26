import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

export const createPropertySchema=z.object({
	property_name:z.string(),
	property_address:z.string(),
	property_phone:z.string(),
})

export type createPropertyBody=z.infer<typeof createPropertySchema>

export const { schemas: propertySchemas, $ref: $propertySchemaRef } =
	buildJsonSchemas(
		{
			
            createPropertySchema
		},
		{ $id: 'propertySchemas' }
	); 

