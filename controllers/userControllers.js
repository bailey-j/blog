import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = mongoose.model('User', UserSchema);
mongoose.set('useFindAndModify', false);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);
/////////////////////////////////////
  newUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUsers = (req, res) => {
  User.find({}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUserById = (req, res) => {
  User.findOne({ userId: req.params.userId }, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const deleteUser = (req, res) => {
  User.deleteOne({ userId: req.params.userId}, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({message : "Successfully deleted User"});
  });
};