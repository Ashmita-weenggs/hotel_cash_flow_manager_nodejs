"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$manageCashSchemaRef = exports.manageCashSchemas = exports.manageCashParamsSchema = exports.manageCashSchema = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
exports.manageCashSchema = zod_1.z.object({
    date: zod_1.z.date().optional(),
    shift_1_amount: zod_1.z.number().optional(),
    shift_2_amount: zod_1.z.number().optional(),
});
exports.manageCashParamsSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    manageCashSchema: exports.manageCashSchema,
    manageCashParamsSchema: exports.manageCashParamsSchema,
}, { $id: 'manageCashSchemas' }), exports.manageCashSchemas = _a.schemas, exports.$manageCashSchemaRef = _a.$ref;
