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
exports.adminCreateUserService = exports.adminLoginService = void 0;
const db_utils_1 = require("../../utils/db.utils");
const error_handler_utils_1 = require("../../utils/error-handler.utils");
const console_log_utils_1 = require("../../utils/console_log.utils");
const adminLoginService = (jwt, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_utils_1.db.tbl_users.findFirst({
        where: {
            email: data.email,
            password: data.password,
            role_id: 1,
        },
    });
    console_log_utils_1.Log.debug('user', user);
    if (!user) {
        return (0, error_handler_utils_1.CF_Error)({ statusCode: 401 });
    }
    const access_token = yield (jwt === null || jwt === void 0 ? void 0 : jwt.sign({
        username: user.username,
        user_id: user.id,
        role_id: user.role_id,
    }, { expiresIn: '1y' }));
    console_log_utils_1.Log.debug('access_token', access_token);
    return access_token;
});
exports.adminLoginService = adminLoginService;
const adminCreateUserService = (isAdmin, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!isAdmin) {
        return (0, error_handler_utils_1.CF_Error)({
            message: 'You do not ahve permision to create a user',
            statusCode: 403,
        });
    }
    else {
        data;
        const user = yield db_utils_1.db.tbl_users.create({
            data: Object.assign(Object.assign({}, data), { password: '123' }),
        });
        return user;
    }
});
exports.adminCreateUserService = adminCreateUserService;
