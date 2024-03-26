"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const items_router_1 = __importDefault(require("./items.router"));
const routerApi = (app) => {
    app.use('/api/items', items_router_1.default);
};
exports.routerApi = routerApi;
