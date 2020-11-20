"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const app = express_1.default();
const PORT = 3000;
//mongo connection
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//body-parser config
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
//routes
blogRoutes_1.default(app);
//CORS
app.use(cors_1.default());
app.use((req, res, next) => {
    console.log('New Request', req.url);
    next();
});
app.get("/", (req, res) => res.send(`Wow Our Server is Running on PORT: ${PORT}`));
app.listen(PORT, () => console.log(`We're running port ${PORT}`));
