"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthorMiddleware = void 0;
const setAuthorMiddleware = (_req, res, next) => {
    res.author = {
        name: 'Andres',
        lastname: 'Medina'
    };
    next();
};
exports.setAuthorMiddleware = setAuthorMiddleware;
