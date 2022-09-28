import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color: "green" | "blue" | "red";
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  ...props
}) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
