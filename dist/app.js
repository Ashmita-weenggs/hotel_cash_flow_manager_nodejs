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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const users_schema_1 = require("./modules/users/users.schema");
const index_routes_1 = require("./routes/index.routes");
const auth_schema_1 = require("./modules/auth/auth.schema");
const jwt_1 = __importDefault(require("@fastify/jwt"));
const console_log_utils_1 = require("./utils/console_log.utils");
const property_schema_1 = require("./modules/property/property.schema");
const cash_schema_1 = require("./modules/cash/cash.schema");
const logger = {
    level: 'debug',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            sync: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss.l',
            ignore: 'pid,hostname,reqId,plugin',
            levelFirst: true,
        },
    },
};
const fastify = (0, fastify_1.default)({ logger });
for (const schema of [
    ...users_schema_1.userSchemas,
    ...auth_schema_1.adminSchemas,
    ...property_schema_1.propertySchemas,
    ...cash_schema_1.manageCashSchemas,
]) {
    fastify.addSchema(schema);
}
fastify.register(jwt_1.default, {
    secret: 'ndkandnan78duy9sau87dbndsa89u7dsy789adb',
});
fastify.decorate('authenticate', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = (yield request.jwtVerify());
        request.user = payload;
        console_log_utils_1.Log.debug('payload', payload);
        console_log_utils_1.Log.debug('request.user', request.user);
        return payload;
    }
    catch (e) {
        return reply.send(e);
    }
}));
fastify.addHook('preHandler', (req, reply, next) => {
    console_log_utils_1.Log.debug('preHandler', 'ok');
    req.jwt = fastify.jwt;
    console_log_utils_1.Log.debug('req.jwt', req.jwt);
    return next();
});
fastify.register(index_routes_1.apiRoutes, { prefix: '/api' });
exports.app = fastify;
