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
        <Link className="cards__item__link" to={props.post && props.post._id}>
          <h4>{props.post.postTitle}</h4>
          <div className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="Blog Image"
              src={props.post.imageUrl}
            />
          </div>
          <div className="cards__item__info">
            <p>{moment(`${props.post.datePublished}`).format("DD MMM YYYY")}</p>

            <p className="cards__item__text">{props.post.postBody}</p>
            <h6>Read more ...</h6>
          </div>
        </Link>
      </li>
    </>
  );
}
