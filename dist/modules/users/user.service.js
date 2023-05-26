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
exports.updateUserService = exports.createUserService = void 0;
const db_utils_1 = require("../../utils/db.utils");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {};
    const userExists = yield db_utils_1.db.tbl_users.findFirst({
        where: {
            OR: [{ username: data.username }],
        },
    });
    if (userExists) {
        const error = new Error('email or username already in use');
        result.isError = true;
        result.error = error;
    }
    else {
        const user = yield db_utils_1.db.tbl_users.create({
            data,
        });
        if (user) {
            result.user = user;
        }
    }
    return result;
});
exports.createUserService = createUserService;
const updateUserService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {};
    const userExists = yield db_utils_1.db.tbl_users.findFirst({
        where: {
            id,
        },
    });
    const user = yield db_utils_1.db.tbl_users.update({
        data,
        where: {
            id
        }
    });
    if (user) {
        result.user = user;
    }
    return result;
});
exports.updateUserService = updateUserService;
