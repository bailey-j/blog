import mongoose from "mongoose";
import { PostSchema } from "../models/postModel";

const Post = mongoose.model('Post', PostSchema);
mongoose.set('useFindAndModify', false);

export const addNewPost = (req: { body: any }, res: any) => {
  let newPost = new Post(req.body);

  newPost.save((err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const getPosts = (req: any, res: any) => {
  Post.find({}, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const getPostById = (req: {params: any}, res: any) => {
  Post.findOne({ postId: req.params.postId }, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const updatePost = (req: { body: any, params: any }, res: any) => {
  Post.findOneAndUpdate({ postId: req.params.postId }, req.body, {new: true}, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const deletePost = (req: any, res: any) => {
  Post.deleteOne({ postId: req.params.postId}, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({message : "Successfully deleted Post"});
  });
};