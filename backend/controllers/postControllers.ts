import fileupload from 'express-fileupload'
import mongoose from "mongoose";
import { Post, BodyProps } from "../models/postModel";
import fs from 'fs'
import path from 'path'
// import { upload } from '../index'

mongoose.set('useFindAndModify', false);

export const addNewPost = (req: any, res: any) => {
  console.log(req.body)
  let newPost = new Post({
    postId: req.body.postId,
    datePublished: req.body.datePublished,
    postTitle: req.body.postTitle,
    // imageUrl: req.body.imageUrl,
    postBody: req.body.postBody,
  })
  newPost.imageUrl = req.files, // alows object to be saved
  // newPost.imageUrl.file = fs.readFileSync()

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