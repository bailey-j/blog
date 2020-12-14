import React from "react";
import { Page } from "../components/Page";
import EditPost from "../components/EditPost";
import { useParams } from "react-router-dom";

export function Edit() {
  let { postId } = useParams<any>();

  const [post, setPost] = React.useState<any[] | undefined>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch(`post/${postId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(setPost)
      .catch(setError);
  }, []);

  return (
    <Page>
      {error && `${error}`}
      <div className="hero-container">
        <h1>Admin</h1>
      </div>
      <div className="container">
        <div className="section">
          <h4>Edit Post</h4>

          <div className="main-container center">
            {post ? <EditPost post={post} /> : "Nothing to see here"}
          </div>
        </div>
      </div>
    </Page>
  );
}
