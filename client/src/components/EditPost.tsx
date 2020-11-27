import React from "react";

export default function EditPost(props: any) {
  const postTitle = React.useRef(null);
  const postId = React.useRef(null);
  const postBody = React.useRef(null);

  const [formInput, setFormInput] = React.useState({
    postTitle: "",
    postId: "",
    postBody: "",
    imageUrl: "",
  });
  formInput.postTitle = props.post.postTitle;
  formInput.postId = props.post.postId;
  formInput.postBody = props.post.postBody;
  formInput.imageUrl = props.post.imageUrl;

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  console.log(formInput);
  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "multipart/form-data" },
      body: encode({
        "form-name": "add-post",
        ...formInput,
      }),
    };
    fetch(`http://localhost:3000/post/${props.post.postId}`, requestOptions)
      .then(() => alert("Sent!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <>
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
                defaultValue={props.post.postTitle}
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
                disabled
                defaultValue={props.post.postId}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="post_body"
                ref={postBody}
                className="materialize-textarea"
                name="postBody"
                defaultValue={props.post.postBody}
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
                defaultValue={props.post.imageUrl}
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
    </>
  );
}
