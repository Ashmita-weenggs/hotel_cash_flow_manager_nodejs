"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_Error = void 0;
const error_1 = require("@fastify/error");
const console_log_utils_1 = require("./console_log.utils");
const CF_Error = (opts) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const errorCode = (_c = (_a = opts === null || opts === void 0 ? void 0 : opts.errorCode) !== null && _a !== void 0 ? _a : (_b = opts === null || opts === void 0 ? void 0 : opts.Base) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : 'CF_ERROR';
    const message = (_f = (_d = opts === null || opts === void 0 ? void 0 : opts.message) !== null && _d !== void 0 ? _d : (_e = opts === null || opts === void 0 ? void 0 : opts.Base) === null || _e === void 0 ? void 0 : _e.message) !== null && _f !== void 0 ? _f : 'Internal Server Error';
    const statusCode = (_g = opts === null || opts === void 0 ? void 0 : opts.statusCode) !== null && _g !== void 0 ? _g : 500;
    const CustomError = (0, error_1.createError)(errorCode, message, statusCode);
    console_log_utils_1.Log.print('CF_Error', {
        errorCode,
        message,
        statusCode,
    });
    console_log_utils_1.Log.print('CF_Error.stack', (_j = (_h = opts === null || opts === void 0 ? void 0 : opts.Base) === null || _h === void 0 ? void 0 : _h.stack) !== null && _j !== void 0 ? _j : CustomError().stack);
    return new CustomError();
};
exports.CF_Error = CF_Error;
