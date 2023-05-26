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
exports.cashRoutes = void 0;
const cash_schema_1 = require("./cash.schema");
const validator_utils_1 = require("../../utils/validator.utils");
const cash_controller_1 = require("./cash.controller");
function cashRoutes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.put('/:id', {
            schema: {
                body: (0, cash_schema_1.$manageCashSchemaRef)('manageCashSchema'),
                params: (0, cash_schema_1.$manageCashSchemaRef)('manageCashSchema'),
            },
            preValidation: (req, res) => __awaiter(this, void 0, void 0, function* () { return yield (0, validator_utils_1.requestValidator)(req, res, { schema: cash_schema_1.manageCashSchema }); }),
        }, cash_controller_1.manageCashController);
    });
}
exports.cashRoutes = cashRoutes;
