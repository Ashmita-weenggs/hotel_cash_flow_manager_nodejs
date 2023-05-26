import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

export const manageCashSchema = z.object({
	cash_id:z.number(),
	date: z.string(),
	shift_1_amount: z.number().optional(),
	shift_2_amount: z.number().optional(),shift_3_before_audit_amount:z.number().optional(),
	shift_3_after_audit_amount:z.number().optional()
});

export const manageCashParamsSchema = z.object({
	cash_id: z.number(),
});

export type manageCashBody = z.infer<typeof manageCashSchema>;
export type manageCashParamsBody = z.infer<typeof manageCashParamsSchema>;
export const { schemas: manageCashSchemas, $ref: $manageCashSchemaRef } =
	buildJsonSchemas(
		{
			manageCashSchema,
			manageCashParamsSchema,
		},
		{ $id: 'manageCashSchemas' }
	);
