import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slices/todoSlice";
import { RootState } from "../../redux/store";
import Button from "../Button/Button";
import styles from "./Modal.module.scss";

export type activeProps = {
  setActive: (s: boolean) => void;
};

let DEFAULT_TODO = {
  id: 0,
  title: "",
  dateStart: "12.09.22",
  category: "Task",
  description: "",
  dateEnd: "Стандарт",
};

const Modal: React.FC<activeProps> = ({ setActive }) => {
  const arr = useSelector((state: RootState) => state.todoSlice.todo);
  const [todo, setTodo] = useState(DEFAULT_TODO);
  const dispatch = useDispatch();

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    todo.id = arr.length + 1;
    setTodo({ ...todo, [name]: value });
    console.log(todo);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalWindow}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          id="form"
        >
          <h2>Add list item</h2>
          <label htmlFor="inputTitle">
            <h3>Заголовок</h3>
            <input
              type="text"
              placeholder="Введіть заголовок"
              id="inputTitle"
              name="title"
              onChange={onChange}
            />
          </label>
          <label htmlFor="inputSelect">
            <h3>Категория</h3>
            <select name="category" id="inputSelect" onChange={onChange}>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
          </label>
          <label htmlFor="inputDescription">
            <h3>Опис</h3>
            <input
              type="text"
              id="inputDescription"
              name="description"
              onChange={onChange}
            />
          </label>
          {/* <label htmlFor="inputDateEnd">
            <h3>Дата закінчення</h3>
            <input type="date" id="inputDateEnd" />
          </label> */}
          <Button
            color="blue"
            onClick={() => {
              dispatch(addTask(todo));
              setActive(false);
            }}
          >
            Add
          </Button>
        </form>
        <button className={styles.btnClose} onClick={() => setActive(false)}>
          X
        </button>
      </div>
      <div className={styles.overlay} onClick={() => setActive(false)}></div>
    </div>
  );
};

export default Modal;
