import React from "react";
import styles from "./index.module.css";

const List = (props) => {
  return (
    <ol type={props.type} start={props.start} className={styles.ol}>
      {props.children}
    </ol>
  );
};

export default List;
