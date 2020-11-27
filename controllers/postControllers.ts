import mongoose from "mongoose";
import { Post, BodyProps } from "../models/postModel";

mongoose.set('useFindAndModify', false);

export const addNewPost = (req: any, res: any) => {
  console.log(req.body)
  let newPost = new Post({
    datePublished: req.body.datePublished,
    imageUrl: req.body.imageUrl,
    postTitle: req.body.postTitle,
    postBody: req.body.postBody,
  })

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
  Post.findOne({ _id: req.params._id }, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const updatePost = (req: { body: any, params: any }, res: any) => {
  Post.findOneAndUpdate({ _id: req.params._id }, req.body, {new: true}, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const deletePost = (req: any, res: any) => {
  Post.deleteOne({ _id: req.params._id}, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({message : "Successfully deleted Post"});
  });
};