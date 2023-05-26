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
exports.manageCashController = void 0;
const cash_service_1 = require("./cash.service");
function manageCashController(request, reply) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = request.body;
            const id = request.params.id;
            const { cash_detail, isError, error } = yield (0, cash_service_1.manageCashService)(data, id);
            if (isError) {
                return reply.status(409).send({
                    status: false,
                    message: error.message,
                });
            }
            if (cash_detail) {
                return {
                    status: true,
                    message: 'cash generated',
                };
            }
        }
        catch (error) {
            console.log(error);
            if (error instanceof Error) {
                return reply.status(500).send({
                    status: false,
                    message: (_a = error.message) !== null && _a !== void 0 ? _a : 'Internal Server Error',
                });
            }
        }
    });
}
exports.manageCashController = manageCashController;
