import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes =
    "card-container " + (props.bg === "dark" ? "bg-dark" : "bg-light");

  return (
    <div className="center">
      <div className={classes}>{props.children}</div>
    </div>
  );
};

export default Card;
