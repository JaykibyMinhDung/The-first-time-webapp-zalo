import React, { Children } from "react";
import "./theme.css";

const Theme = (props) => {
  return <div className="background--header">{props.children}</div>;
};

export default Theme;
