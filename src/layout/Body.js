import React from "react";
import "./Body.scss";

function Body(props) {
  const children = props.children;
  return <div className="body">{children}</div>;
}

export default Body;
