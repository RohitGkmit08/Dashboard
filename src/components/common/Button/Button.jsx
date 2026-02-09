import React from "react";
import "./Button.css";

const Button = ({ title, type = "button", disabled = false, onClick}) => {
  return (
    <button
      className="btn"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
