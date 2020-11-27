import mongoose from "mongoose";
import { Post } from "../models/postModel.js";

mongoose.set('useFindAndModify', false);

export const addNewPost = (req, res) => {
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

export const getPosts = (req, res) => {
  Post.find({}, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const getPostById = (req , res) => {
  Post.findOne({ _id: req.params._id }, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const updatePost = (req, res) => {
  Post.findOneAndUpdate({ _id: req.params._id }, req.body, {new: true}, (err, Post) => {
    if (err) {
      res.send(err);
    }
    res.json(Post);
  });
};

export const deletePost = (req, res) => {
  Post.deleteOne({ _id: req.params._id}, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({message : "Successfully deleted Post"});
  });
};