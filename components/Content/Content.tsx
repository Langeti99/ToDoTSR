import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button/Button";
import { Archive } from "./Archive/Archive";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Content.module.scss";
import Tasks from "./Tasks/Tasks";

export type activeProps = {
  setActive: (s: boolean) => void;
};

const Content: React.FC<activeProps> = ({ setActive }) => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Tasks setActive={setActive} />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>

      <div className={styles.btn}>
        <Button color="blue" onClick={() => setActive(true)}>
          Create note
        </Button>
      </div>
    </div>
  );
};

export default Content;
