import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
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
