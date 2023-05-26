"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyRoutes = void 0;
const property_schema_1 = require("./property.schema");
const validator_utils_1 = require("../../utils/validator.utils");
const property_controller_1 = require("./property.controller");
function propertyRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post('/admin/create-property', {
            schema: {
                tags: ['CreateProperty'],
                body: (0, property_schema_1.$propertySchemaRef)('createPropertySchema'),
            },
            preValidation: (req, res) => __awaiter(this, void 0, void 0, function* () { return yield (0, validator_utils_1.requestValidator)(req, res, { schema: property_schema_1.createPropertySchema }); }),
            preHandler: [fastify.authenticate],
        }, property_controller_1.admincreatePropertyController);
    });
}
exports.propertyRoutes = propertyRoutes;
