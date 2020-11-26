import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface BodyProps extends mongoose.Document {
  postId: {
    type: String,
  },
  datePublished: {
    type: Date,
  },
  postTitle: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  postBody: {
    type: String,
  }
}

export const PostSchema = new Schema ({
  postId: {
    type: String,
  },
  datePublished: {
    type: Date,
    default: Date.now
  },
  postTitle: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  postBody: {
    type: String,
  }
});


export const Post = mongoose.model<BodyProps>('Post', PostSchema);
