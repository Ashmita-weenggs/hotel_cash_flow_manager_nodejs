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
exports.manageCashService = void 0;
const db_utils_1 = require("../../utils/db.utils");
const manageCashService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {};
    const cashExists = yield db_utils_1.db.tbl_cash_manager.findFirst({
        where: {
            id,
        },
    });
    if (cashExists) {
        const cash_detail = yield db_utils_1.db.tbl_cash_manager.update({
            data,
            where: {
                id,
            },
        });
        if (cash_detail) {
            result.cash_detail = cash_detail;
        }
        return result;
    }
    else {
        const cash_detail = yield db_utils_1.db.tbl_cash_manager.create({
            data,
        });
        if (cash_detail) {
            result.cash_detail = cash_detail;
        }
        return result;
    }
});
exports.manageCashService = manageCashService;
