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
exports.usersRoutes = void 0;
const validator_utils_1 = require("../../utils/validator.utils");
const user_controller_1 = require("./user.controller");
const users_schema_1 = require("./users.schema");
function usersRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get('/', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { user: 'user' };
        }));
        fastify.get('/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { user: 'user' };
        }));
        fastify.post('/', {
            schema: {
                body: (0, users_schema_1.$userSchemaRef)('createUserBodySchema'),
            },
            preValidation: (req, res) => __awaiter(this, void 0, void 0, function* () { return yield (0, validator_utils_1.requestValidator)(req, res, { schema: users_schema_1.createUserSchema }); }),
        }, user_controller_1.createUserController);
        fastify.put('/:id', {
            schema: {
                body: (0, users_schema_1.$userSchemaRef)('updateUserBodySchema'),
                params: (0, users_schema_1.$userSchemaRef)('updateUserParamsSchema')
            },
            preValidation: (req, res) => __awaiter(this, void 0, void 0, function* () { return yield (0, validator_utils_1.requestValidator)(req, res, { schema: users_schema_1.updateUserSchema }); }),
        }, user_controller_1.updateUserController);
        fastify.delete('/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { user: 'user' };
        }));
    });
}
exports.usersRoutes = usersRoutes;
