import type React from "react";
import "./styles.css"

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  title,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button className="btn" type={type} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
