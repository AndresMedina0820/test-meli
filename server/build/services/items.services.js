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
exports.getItemCategoryService = exports.getItemDescriptionService = exports.getItemsByIdService = exports.getItemsService = void 0;
const BASEAPI = 'https://api.mercadolibre.com';
const getItemsService = (query, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASEAPI}/sites/MLA/search?q=${query}&&limit=${limit}`);
        return yield response.json();
    }
    catch (error) {
        console.error(error);
    }
});
exports.getItemsService = getItemsService;
const getItemsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASEAPI}/items/${id}`);
        return yield response.json();
    }
    catch (error) {
        console.error(error);
    }
});
exports.getItemsByIdService = getItemsByIdService;
const getItemDescriptionService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASEAPI}/items/${id}/description`);
        return yield response.json();
    }
    catch (error) {
        console.error(error);
    }
});
exports.getItemDescriptionService = getItemDescriptionService;
const getItemCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${BASEAPI}/categories/${id}`);
        return yield response.json();
    }
    catch (error) {
        console.error(error);
    }
});
exports.getItemCategoryService = getItemCategoryService;
