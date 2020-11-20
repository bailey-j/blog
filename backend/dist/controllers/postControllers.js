"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPostById = exports.getPosts = exports.addNewPost = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postModel_1 = require("../models/postModel");
const Post = mongoose_1.default.model('Post', postModel_1.PostSchema);
mongoose_1.default.set('useFindAndModify', false);
exports.addNewPost = (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((err, Post) => {
        if (err) {
            res.send(err);
        }
        res.json(Post);
    });
};
exports.getPosts = (req, res) => {
    Post.find({}, (err, Post) => {
        if (err) {
            res.send(err);
        }
        res.json(Post);
    });
};
exports.getPostById = (req, res) => {
    Post.findOne({ postId: req.params.postId }, (err, Post) => {
        if (err) {
            res.send(err);
        }
        res.json(Post);
    });
};
exports.updatePost = (req, res) => {
    Post.findOneAndUpdate({ postId: req.params.postId }, req.body, { new: true }, (err, Post) => {
        if (err) {
            res.send(err);
        }
        res.json(Post);
    });
};
exports.deletePost = (req, res) => {
    Post.deleteOne({ postId: req.params.postId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted Post" });
    });
};
