"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items_controller_1 = require("../controllers/items.controller");
const authors_middleware_1 = require("../middleware/authors.middleware");
const router = express_1.default.Router();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', authors_middleware_1.setAuthorMiddleware, items_controller_1.getItems);
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:id', authors_middleware_1.setAuthorMiddleware, items_controller_1.getItemId);
exports.default = router;
