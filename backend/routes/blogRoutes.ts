import { addNewPost, getPosts, getPostById, updatePost, deletePost } from "../controllers/postControllers";

const routes = (app: any) => {
  app.route("/posts").get(getPosts).post(addNewPost);

  app.route("/post/:postId").get(getPostById).put(updatePost).delete(deletePost);

};

export default routes;
