import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";

export function Admin() {
  return (
    <Page>
      <div className="hero-container">
        <h1>Admin</h1>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white center">
                  <Link to="/admin/create">
                    <h5 className="card-title">Create New Post</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white center">
                  <Link to="/admin/posts">
                    <h5 className="card-title">Edit Existing Posts</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
