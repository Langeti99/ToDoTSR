import React from "react";
import styles from "./Category.module.scss";

type titleProps = { title: string; active: number; archived: number };

export const Category: React.FC<titleProps> = ({ title, active, archived }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_title}>
        <img src="./img/cartIcon.png" alt="cart" />
        <h2>{title}</h2>
      </div>
      <div>{active}</div>
      <div>{archived}</div>
    </div>
  );
};
