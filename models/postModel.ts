import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface BodyProps extends mongoose.Document {
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
