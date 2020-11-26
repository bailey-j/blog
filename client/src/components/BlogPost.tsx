import React from "react";
import moment from "moment";

export default function BlogPost(props: any) {
  return (
    <>
      <div className="cards__item__pic-wrap">
        <img
          className="cards__item__img"
          alt="Blog Image"
          src={props.post.imageUrl}
        />
      </div>
      <h4>{props.post.postTitle}</h4>
      <div className="cards__item__info">
        <p>{moment(`${props.post.datePublished}`).format("DD MMM YYYY")}</p>
        <h5 className="cards__container cards__item__text">
          {props.post.postBody}
        </h5>
      </div>
    </>
  );
}
