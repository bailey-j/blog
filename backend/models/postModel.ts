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
  // imageUrl: {
  //   type: String,
  // },
  // imageUrl: { data: Buffer, contentType: String },
  imageUrl: {
    file: Buffer,
    imageUrl: String,
    mimetype: String
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
  // imageUrl: {
  //   type: String,
  // },
  // imageUrl: { data: Buffer, contentType: String },
  imageUrl: {
    file: { type: Buffer},
    imageUrl: { type: String, required: true, default: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" },
    mimetype: { type: String}
  },
  postBody: {
    type: String,
  }
});


export const Post = mongoose.model<BodyProps>('Post', PostSchema);
