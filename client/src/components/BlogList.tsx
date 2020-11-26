import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function BlogCard(props: any) {
  if (props.post.postBody.length > 200) {
    props.post.postBody = props.post.postBody.substring(0, 200) + " . . .";
  }
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={`/admin/posts/${props.post && props.post.postId}`}
        >
          <div className="cards__item__info">
            <span className="left">{props.post.postTitle}</span>
            {"   "}
            <span className="right">
              {moment(`${props.post.datePublished}`).format("DD MMM YYYY")}
            </span>
          </div>
        </Link>
      </li>
    </>
  );
}
