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
exports.updateUserController = exports.createUserController = void 0;
const user_service_1 = require("./user.service");
function createUserController(request, reply) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = request.body;
            const { user, isError, error } = yield (0, user_service_1.createUserService)(data);
            if (isError) {
                return reply.status(409).send({
                    status: false,
                    message: error.message,
                });
            }
            if (user) {
                return {
                    status: true,
                    message: 'User created',
                };
            }
        }
        catch (error) {
            console.log(error);
            if (error instanceof Error) {
                return reply.status(500).send({
                    success: false,
                    message: (_a = error.message) !== null && _a !== void 0 ? _a : 'Internal Server Error',
                });
            }
        }
    });
}
exports.createUserController = createUserController;
function updateUserController(request, reply) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = request.body;
            const id = request.params.id;
            const { user, isError, error } = yield (0, user_service_1.updateUserService)(data, id);
            if (isError) {
                return reply.status(409).send({
                    status: false,
                    message: error.message,
                });
            }
            if (user) {
                return {
                    status: true,
                    message: 'User updated',
                };
            }
        }
        catch (error) {
            console.log(error);
            if (error instanceof Error) {
                return reply.status(500).send({
                    success: false,
                    message: (_a = error.message) !== null && _a !== void 0 ? _a : 'Internal Server Error',
                });
            }
        }
    });
}
exports.updateUserController = updateUserController;
