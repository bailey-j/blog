"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.PostSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    datePublished: {
        type: Date,
        default: Date.now
    },
    postTitle: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    postBody: {
        type: String,
        required: true
    }
});
