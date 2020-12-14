import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tech } from "./pages/Tech";
import { Admin } from "./pages/Admin";
import { Post } from "./pages/Post";
import { CreatePost } from "./pages/CreatePost";
import { View } from "./pages/View";
import { Edit } from "./pages/Edit";

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
