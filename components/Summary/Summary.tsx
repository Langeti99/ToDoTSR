import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Header from "../Header/Header";
import { Category } from "./Category/Category";

import styles from "./Summary.module.scss";

const array2 = ["Name", "Active", "Archived"];

export const Summary: React.FC = () => {
  const { summary, todo, archive } = useSelector(
    (state: RootState) => state.todoSlice
  );
  const activeTask = todo.filter((item) => item.category === "Task");
  const activeThought = todo.filter(
    (item) => item.category === "Random Thought"
  );
  const activeIdea = todo.filter((item) => item.category === "Idea");

  // archived

  const archivedTask = archive.filter((item) => item.category === "Task");
  const archivedThought = archive.filter(
    (item) => item.category === "Random Thought"
  );
  const archivedIdea = archive.filter((item) => item.category === "Idea");

  return (
    <div className={styles.summary}>
      <Header titles={array2} sizes="big" />
      {summary.map((item, i) => {
        if (item === "Task") {
          return (
            <Category
              title={item}
              key={i}
              active={activeTask.length}
              archived={archivedTask.length}
            />
          );
        }
        if (item === "Random Thought") {
          return (
            <Category
              title={item}
              key={i}
              active={activeThought.length}
              archived={archivedThought.length}
            />
          );
        }
        if (item === "Idea") {
          return (
            <Category
              title={item}
              key={i}
              active={activeIdea.length}
              archived={archivedIdea.length}
            />
          );
        }
      })}
    </div>
  );
};
