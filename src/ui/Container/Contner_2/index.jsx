import React from "react";
import styles from "./index.module.css";

const Container_2 = ({ children }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContentCont}>
        <div className={styles.row}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container_2;
