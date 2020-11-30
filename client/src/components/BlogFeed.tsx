import React from "react";
import BlogCard from "./BlogCard";

export default function BlogFeed() {
  const [posts, setPosts] = React.useState<any[] | undefined>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch(`http://localhost:${window.location.port}/posts`, {
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch(setError);
  }, []);
  return (
    <>
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
                <BlogCard key={key} post={post} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
