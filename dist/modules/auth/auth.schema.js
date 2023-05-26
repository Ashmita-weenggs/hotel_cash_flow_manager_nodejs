"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$adminSchemaRef = exports.adminSchemas = exports.tokenResponseSchema = exports.tokenSchema = exports.loginSchema = exports.createSchema = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
const users_schema_1 = require("../users/users.schema");
exports.createSchema = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string().optional(),
    password: zod_1.z.string(),
});
exports.loginSchema = exports.createSchema;
exports.tokenSchema = zod_1.z.object({
    accessToken: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
});
exports.tokenResponseSchema = exports.tokenSchema;
_a = (0, fastify_zod_1.buildJsonSchemas)({
    createSchema: exports.createSchema,
    loginSchema: exports.loginSchema,
    createUserSchema: users_schema_1.createUserSchema,
    tokenResponseSchema: exports.tokenResponseSchema,
}, { $id: 'adminSchemas' }), exports.adminSchemas = _a.schemas, exports.$adminSchemaRef = _a.$ref;
