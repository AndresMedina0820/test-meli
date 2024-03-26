"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use((0, cors_1.default)());
// app.use((_req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Credentials', 'true')
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
//   res.setHeader('Cache-Control', 'no-cache')
//   next()
// })
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Routes
(0, index_1.routerApi)(app);
