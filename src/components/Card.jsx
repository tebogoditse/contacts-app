import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

export default function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>{props.name}</h1>
          <Details detailsInfo={props.phone} />
          <Details detailsInfo={props.email} />
        </div>
        <div className="flip-card-back">
          <Avatar img={props.img} />
        </div>
      </div>
    </div>
  )
}