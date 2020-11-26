import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Tech } from "./pages/tech";
import { Admin } from "./pages/admin";
import { Post } from "./pages/post";
import { CreatePost } from "./pages/createPost";
import { View } from "./pages/view";
import { Edit } from "./pages/edit";

const router = (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/tech">
        <Tech />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/admin/create">
        <CreatePost />
      </Route>
      <Route exact path="/admin/posts">
        <View />
      </Route>
      <Route exact path="/admin/posts/:postId">
        <Edit />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
