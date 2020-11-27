import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});
