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
exports.apiRoutes = void 0;
const auth_route_1 = require("../modules/auth/auth.route");
const users_route_1 = require("../modules/users/users.route");
const property_route_1 = require("../modules/property/property.route");
const cash_route_1 = require("../modules/cash/cash.route");
const apiRoutes = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.register(auth_route_1.authRoutes, { prefix: '/auth' });
    fastify.register(users_route_1.usersRoutes, { prefix: '/users' });
    fastify.register(property_route_1.propertyRoutes, { prefix: '/property' });
    fastify.register(cash_route_1.cashRoutes, { prefix: '/cash' });
});
exports.apiRoutes = apiRoutes;
