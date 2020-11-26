import { dirname } from "path";
import React from "react";
import { pathToFileURL } from "url";
import { Page } from "../components/page";

export function Admin() {
  const postTitle = React.useRef(null);
  const postId = React.useRef(null);
  const postBody = React.useRef(null);
  const imageUrl = React.useRef(null);

  const [formInput, setFormInput] = React.useState({
    postTitle: "",
    postId: "",
    postBody: "",
    imageUrl: "",
  });
  // const [imageUrl, setFile] = React.useState({});

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
    // setFile({
    //   imageUrl: e.target.files[0].name,
    // });
    // setFile({ imageUrl: e.target.files[0].name });
    console.log(formInput.imageUrl);
  };

  const handleSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "add-post",
        ...formInput,
        imageUrl,
      }),
    };
    fetch("http://localhost:3000/posts", requestOptions)
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
                <div className="input-field col s9">
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
                <div className="input-field col s3">
                  <input
                    placeholder="Enter ID Here"
                    id="post_id"
                    ref={postId}
                    type="text"
                    className="validate"
                    name="postId"
                    value={formInput.postId}
                    onChange={handleChange}
                  />
                  <label htmlFor="post_id">ID</label>
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

                  <label htmlFor="post_body"></label>
                </div>
              </div>
              <div className="row">
                <div className="file-field input-field">
                  <div className="btn blue darken-1 waves-effect">
                    <span>Upload Image</span>
                    <input
                      type="file"
                      id="imageUrl"
                      ref={imageUrl}
                      name="imageUrl"
                      value={formInput.imageUrl}
                      onChange={handleChange}
                    />
                    {console.log(formInput.imageUrl)}
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
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
