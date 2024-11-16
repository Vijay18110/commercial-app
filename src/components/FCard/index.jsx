import React from "react";
import styles from "./index.module.css";

const FCard = ({ src, title, items, bg }) => {
  return (
    <div className={styles.fCard} style={{ backgroundColor: bg }}>
      <div className={styles.imgCont}>
        <img src={src} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{items} items</p>
    </div>
  );
};

export default FCard;
