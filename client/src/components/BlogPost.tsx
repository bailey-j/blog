import React from "react";
import moment from "moment";

export default function BlogPost(props: any) {
  console.log("PROPS", props);
  return (
    <>
      <div className="cards__item__pic-wrap">
        <img
          className="cards__item__img"
          alt="Blog Image"
          src={props.post.imageUrl && props.post.imageUrl.filename}
          // src="https://images.pexels.com/photos/3621960/pexels-photo-3621960.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
      </div>
      <h4>{props.post.postTitle}</h4>
      <div className="cards__item__info">
        <p>{moment(`${props.post.datePublished}`).format("DD MMM YYYY")}</p>
        <h5 className="cards__item__text">{props.post.postBody}</h5>
      </div>
    </>
  );
}
