import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Tech } from "./pages/tech";
import { Admin } from "./pages/admin";
import { Post } from "./pages/post";

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
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
