import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dearchiveTask, deleteArchive } from "../../../redux/slices/todoSlice";
import { RootState } from "../../../redux/store";
import { Task } from "../../Task/Task";
import styles from "./Archive.module.scss";

export const Archive = () => {
  const archive = useSelector((state: RootState) => state.todoSlice.archive);
  const dispatch = useDispatch();
  const deleteItem = (id: number) => {
    dispatch(deleteArchive(id));
  };
  const dearchiveItem = (id: number) => {
    dispatch(dearchiveTask(id));
  };

  return (
    <div className={styles.container}>
      {archive.map((archive, i) => (
        <Task
          key={i}
          {...archive}
          //@ts-ignore
          onClickDelete={deleteItem}
          //@ts-ignore
          onClickArchive={dearchiveItem}
        />
      ))}
    </div>
  );
};
