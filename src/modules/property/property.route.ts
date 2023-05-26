import { FastifyInstance } from 'fastify';
import { $propertySchemaRef, createPropertySchema } from './property.schema';
import { requestValidator } from '../../utils/validator.utils';
import { admincreatePropertyController } from './property.controller';


export async function propertyRoutes(fastify:FastifyInstance){
    fastify.post(
		'/admin/create-property',
		{
			schema: {
				tags: ['CreateProperty'],
				body: $propertySchemaRef('createPropertySchema'),
			},
			preValidation: async (req, res) =>
				await requestValidator(req, res, { schema: createPropertySchema }),
			preHandler: [fastify.authenticate],
		},
		admincreatePropertyController
	);
}