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
exports.admincreatePropertyController = void 0;
const property_service_1 = require("./property.service");
function admincreatePropertyController(request, reply) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = request.body;
            const { property, isError, error } = yield (0, property_service_1.adminCreatePropertyService)(data);
            if (isError) {
                return reply.status(409).send({
                    status: false,
                    message: error.message,
                });
            }
            if (property) {
                return {
                    status: true,
                    message: 'Property created',
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
exports.admincreatePropertyController = admincreatePropertyController;
