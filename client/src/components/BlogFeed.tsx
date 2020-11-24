import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

export default function BlogFeed() {
  const [posts, setPosts] = React.useState<any[] | undefined>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch(`http://localhost:3000/posts`, {
      headers: {
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
            {posts.map((post, key) => (
              <BlogCard key={key} post={post} />
            ))}

            <li className="cards__item">
              <Link className="cards__item__link" to="#">
                <h4>Static Post</h4>
                <figure className="cards__item__pic-wrap">
                  <img
                    className="cards__item__img"
                    alt="Blog Image"
                    src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  />
                </figure>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">Blog Post 2</h5>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
