import { addNewPost, getPosts, getPostById, updatePost, deletePost } from "../controllers/postControllers";
import { addNewUser, getUsers, getUserById, deleteUser } from "../controllers/userControllers";

// import {upload} from "../index"

const routes = (app: any) => {
  app.route("/posts").get(getPosts).post(addNewPost);
  app.route("/post/:postId").get(getPostById).put(updatePost).delete(deletePost);

  app.route("/users").get(getUsers).post(addNewUser);
  app.route("/user/:userId").get(getUserById).delete(deleteUser);

};

export default routes;