import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function BlogCard(props: any) {
  console.log("PROPS: ", props.post);
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={props.post && props.post.postId}
        >
          <h4>{props.post.postTitle}</h4>
          <div className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="Blog Image"
              src={props.post.imageUrl && props.post.imageUrl.filename}
              // src="https://images.pexels.com/photos/3621960/pexels-photo-3621960.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
          </div>
          <div className="cards__item__info">
            <p>{moment(`${props.post.datePublished}`).format("DD MMM YYYY")}</p>
            <h5 className="cards__item__text">{props.post.postBody}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
