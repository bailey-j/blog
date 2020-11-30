import React from "react";
import { Page } from "../components/page";
import BlogPost from "../components/BlogPost";
import { useParams } from "react-router-dom";

export function Post() {
  let { postId } = useParams<any>();

  const [post, setPost] = React.useState<any[] | undefined>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch(`/post/${postId}`, {
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
      <div className="main-container center">
        {post ? <BlogPost post={post} /> : "Nothing to see here"}
      </div>
    </Page>
  );
}
