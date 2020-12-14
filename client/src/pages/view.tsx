import React from "react";
import { Page } from "../components/Page";
import BlogList from "../components/BlogList";

export function View() {
  const [posts, setPosts] = React.useState<any[] | undefined>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch(`/posts`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch(setError);
  }, []);

  console.log("PROPS", posts);
  return (
    <Page>
      <div className="hero-container">
        <h1>Admin</h1>
      </div>
      <div className="container">
        <div className="section center">
          <h2>Blog Posts</h2>
          {error && `${error}`}
          <div className="cards">
            <div className="cards__container">
              <ul className="cards__items">
                {posts
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                  )
                  .reverse()
                  .map((post, key) => (
                    <BlogList key={key} post={post} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
