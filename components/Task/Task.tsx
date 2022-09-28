import React from "react";
import styles from "./Task.module.scss";
import { deleteTask, TODO } from "./../../redux/slices/todoSlice";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";

export const Task: React.FC<TODO> = ({
  id,
  title,
  description,
  dateStart,
  category,
  dateEnd,
  onClickDelete,
  onClickArchive,
  onClickEdit,
}) => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_title}>
        <img src="./img/cartIcon.png" alt="cart" />
        <h2>{title}</h2>
      </div>
      <time>{1}</time>
      <p>{category}</p>
      <p>{description}</p>
      <time>{dateEnd ? dateEnd : ""}</time>
      <ul>
        <li>
          {
            //@ts-ignore
            <Button color="green" onClick={() => onClickEdit()}>
              <img src="./img/cartIcon.png" alt="icon" />
            </Button>
          }
        </li>
        <li>
          {
            //@ts-ignore
            <Button color="blue" onClick={() => onClickArchive(id)}>
              <img src="./img/cartIcon.png" alt="icon" />
            </Button>
          }
        </li>
        <li>
          {
            //@ts-ignore
            <Button color="red" onClick={() => onClickDelete(id)}>
              <img src="./img/cartIcon.png" alt="icon" />
            </Button>
          }
        </li>
      </ul>
    </div>
  );
};
