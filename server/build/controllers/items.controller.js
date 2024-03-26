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
exports.getItemId = exports.getItems = void 0;
const items_services_1 = require("../services/items.services");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { search } = req.query;
    const limit = (_b = (_a = req.query) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : 4;
    const { results } = yield (0, items_services_1.getItemsService)(String(search), Number(limit));
    const categoryId = getMainCategory(results.map((r) => { var _a; return (_a = r === null || r === void 0 ? void 0 : r.category_id) !== null && _a !== void 0 ? _a : ''; }));
    const category = categoryId ? yield (0, items_services_1.getItemCategoryService)(categoryId) : '';
    const response = {
        author: res.author,
        categories: category && category.path_from_root.map((c) => c.name) || [''],
        items: results.map((item) => mappingItemResponse(item)),
    };
    res.status(201).json(response);
});
exports.getItems = getItems;
const getItemId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const itemResponse = yield (0, items_services_1.getItemsByIdService)(id);
    const description = yield (0, items_services_1.getItemDescriptionService)(id);
    const categories = yield (0, items_services_1.getItemCategoryService)(itemResponse.category_id);
    const item = mappingItemResponse(itemResponse);
    const response = {
        author: res.author,
        item: Object.assign(Object.assign({}, item), { description: description === null || description === void 0 ? void 0 : description.plain_text, sold_quantity: itemResponse.sold_quantity }),
        categories: categories &&
            categories.path_from_root.map((c) => c.name),
    };
    res.status(201).json(response);
});
exports.getItemId = getItemId;
const mappingItemResponse = (item) => {
    var _a;
    return {
        id: item === null || item === void 0 ? void 0 : item.id,
        title: item === null || item === void 0 ? void 0 : item.title,
        price: {
            currency: item === null || item === void 0 ? void 0 : item.currency_id,
            amount: item === null || item === void 0 ? void 0 : item.price.toFixed(0),
            decimals: (item === null || item === void 0 ? void 0 : item.price) % 1,
        },
        picture: item === null || item === void 0 ? void 0 : item.thumbnail,
        condition: (item === null || item === void 0 ? void 0 : item.condition) || "",
        free_shipping: ((_a = item === null || item === void 0 ? void 0 : item.shipping) === null || _a === void 0 ? void 0 : _a.free_shipping) || false,
    };
};
const getMainCategory = (categories) => {
    const count = {};
    categories.forEach((c) => {
        if (!count[c]) {
            count[c] = 1;
        }
        else {
            count[c]++;
        }
    });
    let string = "";
    let max = 0;
    for (const key in count) {
        if (count[key] > max) {
            max = count[key];
            string = key;
        }
    }
    return string;
};
