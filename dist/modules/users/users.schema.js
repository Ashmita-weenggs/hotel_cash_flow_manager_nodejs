"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$userSchemaRef = exports.userSchemas = exports.updateUserParamsSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string(),
    role_id: zod_1.z.number(),
    fullname: zod_1.z.string().optional(),
    phone_no: zod_1.z.string().optional(),
});
exports.updateUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string(),
    fullname: zod_1.z.string(),
    phone_no: zod_1.z.string(),
});
exports.updateUserParamsSchema = zod_1.z.object({
    id: zod_1.z.number(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    createUserBodySchema: exports.createUserSchema,
    updateUserBodySchema: exports.updateUserSchema,
    updateUserParamsSchema: exports.updateUserParamsSchema
}, { $id: 'userSchemas' }), exports.userSchemas = _a.schemas, exports.$userSchemaRef = _a.$ref;
