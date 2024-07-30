import React from "react";

const Button = ({ children, textOnly, className }) => {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return <button className={cssClasses}>{children}</button>;
};

export default Button;
