import React from "react";
import styles from "./index.module.css";

const Trending_Card = ({ img, title, name, rupee, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgCont}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.contentAlgin}>
        <span className={styles.name}>{name}</span>
        <span className={styles.rupee}>{rupee}</span>
        <span className={styles.rating}>{rating}</span>
      </div>
    </div>
  );
};

export default Trending_Card;
