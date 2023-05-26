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
exports.authRoutes = void 0;
const validator_utils_1 = require("../../utils/validator.utils");
const auth_controller_1 = require("./auth.controller");
const auth_schema_1 = require("./auth.schema");
const users_schema_1 = require("../users/users.schema");
function authRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post('/admin', {
            schema: {
                tags: ['Auth'],
                body: (0, auth_schema_1.$adminSchemaRef)('loginSchema'),
            },
            preValidation: (req, res) => __awaiter(this, void 0, void 0, function* () { return yield (0, validator_utils_1.requestValidator)(req, res, { schema: auth_schema_1.loginSchema }); }),
        }, auth_controller_1.adminLoginController);
        fastify.post('/admin/create-user', {
            schema: {
                tags: ['CreateUser'],
                body: (0, auth_schema_1.$adminSchemaRef)('createUserSchema'),
            },
            preValidation: (req, res) => __awaiter(this, void 0, void 0, function* () { return yield (0, validator_utils_1.requestValidator)(req, res, { schema: users_schema_1.createUserSchema }); }),
            preHandler: [fastify.authenticate],
        }, auth_controller_1.adminCreateUserController);
    });
}
exports.authRoutes = authRoutes;
