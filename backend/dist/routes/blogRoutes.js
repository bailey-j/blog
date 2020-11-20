"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postControllers_1 = require("../controllers/postControllers");
const routes = (app) => {
    app.route("/posts").get(postControllers_1.getPosts).post(postControllers_1.addNewPost);
    app.route("/post/:postId").get(postControllers_1.getPostById).put(postControllers_1.updatePost).delete(postControllers_1.deletePost);
};
exports.default = routes;
