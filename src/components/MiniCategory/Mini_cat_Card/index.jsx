import React from "react";
import styles from "./index.module.css";
// import { Link } from "react-router-dom";

const Mini_cat_Card = ({ img, icon, name, counter }) => {
  return (
    <div className={styles.container}>
      {/* <Link to="/"> */}
      <div className={styles.imgCont}>
        <img src={img} alt={icon} />
      </div>
      <div className={styles.content}>{name}</div>
      {/* </Link> */}

      <div className={styles.counter}>{counter}</div>
    </div>
  );
};

export default Mini_cat_Card;
