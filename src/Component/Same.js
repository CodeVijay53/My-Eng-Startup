import React from "react";
import { NavLink } from "react-router-dom";

export default function Same(props) {
  return (
    <>
      <div className="mainSection">
        <div className="contentBox">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <div className="imgContainer">
          <img src={props.imgsrc} alt="home" />
        </div>
      </div>
    </>
  );
}
