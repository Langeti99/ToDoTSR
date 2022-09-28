import styles from "./App.module.scss";
import Header from "./components/Header/Header";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Content from "./components/Content/Content";
import { Summary } from "./components/Summary/Summary";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const array = ["Name", "Created", "Category", "Content", "Dates"];

const App = () => {
  const items = useSelector((state: RootState) => state.todoSlice);
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo}>
        <Header titles={array} sizes="small" />
        <Content setActive={setActive} />
        <Summary />
        {active ? <Modal setActive={setActive} /> : ""}
      </div>
    </div>
  );
};

export default App;
