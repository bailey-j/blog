import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = mongoose.model('User', UserSchema);
mongoose.set('useFindAndModify', false);

export const addNewUser = (req: { body: any }, res: any) => {
  let newUser = new User(req.body);
/////////////////////////////////////
  newUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUsers = (req: any, res: any) => {
  User.find({}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const getUserById = (req: {params: any}, res: any) => {
  User.findOne({ userId: req.params.userId }, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

export const deleteUser = (req: any, res: any) => {
  User.deleteOne({ userId: req.params.userId}, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({message : "Successfully deleted User"});
  });
};