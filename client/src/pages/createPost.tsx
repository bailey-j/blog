import React from "react";
import { Page } from "../components/Page";

export function CreatePost() {
  const postTitle = React.useRef(null);
  const postId = React.useRef(null);
  const postBody = React.useRef(null);

  const [formInput, setFormInput] = React.useState({
    postTitle: "",
    postId: "",
    postBody: "",
    imageUrl: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "add-post",
        ...formInput,
      }),
    };
    fetch("/posts", requestOptions)
      .then(() => alert("Sent!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <Page>
      <div className="hero-container">
        <h1>Admin</h1>
      </div>
      <div className="container">
        <div className="section">
          <h4>Create New Post</h4>
          <div className="container">
            <form
              className="col s12 center"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              action="/admin"
            >
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Enter Title Here"
                    id="post_title"
                    ref={postTitle}
                    type="text"
                    className="validate"
                    name="postTitle"
                    value={formInput.postTitle}
                    onChange={handleChange}
                  />
                  <label htmlFor="post_title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="post_body"
                    ref={postBody}
                    className="materialize-textarea"
                    name="postBody"
                    value={formInput.postBody}
                    onChange={handleChange}
                  />
                  <label htmlFor="post_body">Body</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="img_url"
                    className="validate"
                    type="text"
                    name="imageUrl"
                    value={formInput.imageUrl}
                    onChange={handleChange}
                  />
                  <label htmlFor="img_url">Image URL</label>
                </div>
              </div>
              <button
                className="btn blue darken-1 waves-effect waves-light"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
}
