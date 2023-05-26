"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$globalQueryStringRef = exports.globalQueryStringSchemas = exports.globalQueryStringSchema = exports.$tokenRef = exports.tokenSchemas = exports.tokenSchema = exports.envSchemas = exports.EnvSchema = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
exports.EnvSchema = zod_1.z.object({
    PORT: zod_1.z.number().default(3001),
    JWT_SECRET: zod_1.z.string(),
    DEBUG_MODE: zod_1.z.number(),
    LOG_MODE: zod_1.z.number(),
    LOG_FOLDER: zod_1.z.string(),
    SESSION_SECRET: zod_1.z.string(),
    DATABASE_URL: zod_1.z.string(),
});
exports.envSchemas = (0, fastify_zod_1.buildJsonSchemas)({
    EnvSchema: exports.EnvSchema,
}, { $id: '$envSchema' }).schemas;
exports.tokenSchema = zod_1.z.object({
    authorization: zod_1.z
        .string()
        .regex(/^Bearer [A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    tokenSchema: exports.tokenSchema,
}, { $id: 'tokenSchemas' }), exports.tokenSchemas = _a.schemas, exports.$tokenRef = _a.$ref;
exports.globalQueryStringSchema = zod_1.z.object({
    sql: zod_1.z.number().min(0).max(1).optional(),
});
_b = (0, fastify_zod_1.buildJsonSchemas)({
    globalQueryStringSchema: exports.globalQueryStringSchema,
}, { $id: 'sqlQueryStringSchemas' }), exports.globalQueryStringSchemas = _b.schemas, exports.$globalQueryStringRef = _b.$ref;
__exportStar(require("../modules/auth/auth.schema"), exports);
