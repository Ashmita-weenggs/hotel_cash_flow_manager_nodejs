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
exports.adminCreateUserController = exports.adminLoginController = void 0;
const auth_service_1 = require("./auth.service");
const console_log_utils_1 = require("../../utils/console_log.utils");
function adminLoginController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = request.body;
            const jwt = request.jwt;
            console_log_utils_1.Log.debug("jwt", jwt);
            const access_token = yield (0, auth_service_1.adminLoginService)(jwt, {
                username,
                password,
            });
            console_log_utils_1.Log.debug("access_token", access_token);
            if (access_token instanceof Error) {
                throw access_token;
            }
            return {
                status: true,
                data: {
                    access_token,
                },
            };
        }
        catch (error) {
            return error;
        }
    });
}
exports.adminLoginController = adminLoginController;
function adminCreateUserController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console_log_utils_1.Log.debug("request.user", request.user);
            const isAdmin = request.user.role_id === 1;
            console.log('isAdmin', isAdmin);
            const data = request.body;
            const res = yield (0, auth_service_1.adminCreateUserService)(isAdmin, data);
            console.log('res', res);
            if (res instanceof Error) {
                throw res;
            }
            if (res) {
                return {
                    status: true,
                    message: 'User for General Manager created Succesfully!',
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
exports.adminCreateUserController = adminCreateUserController;
