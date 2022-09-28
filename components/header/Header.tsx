import { useDispatch } from "react-redux";
import { deleteAllTasks } from "../../redux/slices/todoSlice";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

type HeaderProps = {
  titles: string[];
  sizes: string;
};

const Header: React.FC<HeaderProps> = ({ titles, sizes }) => {
  const template = titles.map((item) => <p>{item}</p>);
  const className = `${styles.header} ${styles[`header_${sizes}`]}`;
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteAllTasks());
  };
  const [isArchive, setIsArchive] = useState(false);
  const fun = () => {
    setIsArchive(!isArchive);
  };

  return (
    <div className={className}>
      {template}
      {sizes === "small" ? (
        <ul>
          {isArchive ? (
            <Link to="/">
              <li>
                <Button color="blue" onClick={fun}>
                  Todo
                </Button>
              </li>
            </Link>
          ) : (
            <Link to="archive">
              <li>
                <Button color="blue" onClick={fun}>
                  Archive
                </Button>
              </li>
            </Link>
          )}
          <li>
            <Button color="red" onClick={deleteAll}>
              Delete
            </Button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
