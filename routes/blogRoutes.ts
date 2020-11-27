import { addNewPost, getPosts, getPostById, updatePost, deletePost } from "../controllers/postControllers";
import { addNewUser, getUsers, getUserById, deleteUser } from "../controllers/userControllers";

const routes = (app: any) => {
  app.route("/posts").get(getPosts).post(addNewPost);
  app.route("/post/:_id").get(getPostById).put(updatePost).delete(deletePost);

  app.route("/users").get(getUsers).post(addNewUser);
  app.route("/user/:userId").get(getUserById).delete(deleteUser);

};

export default routes;