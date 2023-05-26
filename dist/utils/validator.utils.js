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
exports.requestValidator = void 0;
const requestValidator = (request, reply, opts) => __awaiter(void 0, void 0, void 0, function* () {
    const valid_ = opts.schema.safeParse(request.body);
    let message = '';
    let totalErrors = 0;
    let success = false;
    const messageStr = (issue) => `${issue.path.length > 0 ? `[${issue.path}]: ` : ''}${issue.message}`;
    if (!valid_.success) {
        console.log(valid_.error);
        message = valid_.error.issues.map(messageStr).join(' | ');
        totalErrors = valid_.error.issues.length;
        success = valid_.success;
        return reply.status(400).send({
            success,
            message,
            totalErrors,
        });
    }
});
exports.requestValidator = requestValidator;
