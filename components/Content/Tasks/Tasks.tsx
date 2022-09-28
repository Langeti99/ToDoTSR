import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  archiveTask,
  deleteTask,
  editTask,
  TODO,
} from "../../../redux/slices/todoSlice";
import { RootState } from "../../../redux/store";
import { Task } from "../../Task/Task";
import styles from "./Tasks.module.scss";

export type activeProps = {
  setActive: (s: boolean) => void;
};

const Tasks: React.FC<activeProps> = ({ setActive }) => {
  const todos = useSelector((state: RootState) => state.todoSlice.todo);
  const dispatch = useDispatch();
  const deleteItem = (id: number) => {
    dispatch(deleteTask(id));
  };

  const archiveItem = (id: number) => {
    dispatch(archiveTask(id));
  };

  const editItem = (item: TODO) => {
    setActive(true);
    dispatch(editTask(item));
  };

  return (
    <div className={styles.container}>
      {todos.map((todo, i) => (
        <Task
          key={i}
          {...todo}
          //@ts-ignore
          onClickDelete={deleteItem}
          //@ts-ignore
          onClickArchive={archiveItem}
          //@ts-ignore
          onClickEdit={() => editItem(todo)}
        />
      ))}
    </div>
  );
};

export default Tasks;
