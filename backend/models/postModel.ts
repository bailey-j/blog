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
  // imageUrl: {
  //   file: { type: Buffer, required: true },
  //   filename: { type: String, required: true, default: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
  //   mimetype: { type: String, required: true }
    
  // },
  postBody: {
    type: String,
    required: true
  }
});
