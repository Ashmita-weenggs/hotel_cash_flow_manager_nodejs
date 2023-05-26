"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.$propertySchemaRef = exports.propertySchemas = exports.createPropertySchema = void 0;
const fastify_zod_1 = require("fastify-zod");
const zod_1 = require("zod");
exports.createPropertySchema = zod_1.z.object({
    property_name: zod_1.z.string(),
    property_address: zod_1.z.string(),
    property_phone: zod_1.z.string(),
});
_a = (0, fastify_zod_1.buildJsonSchemas)({
    createPropertySchema: exports.createPropertySchema
}, { $id: 'propertySchemas' }), exports.propertySchemas = _a.schemas, exports.$propertySchemaRef = _a.$ref;
