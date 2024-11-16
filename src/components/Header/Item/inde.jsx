import React from "react";
import { Link } from "react-router-dom";
import styles from "../index.module.css";
const Item = ({ to, name, value }) => {
  return (
    <li className={styles.li}>
      {to ? (
        <Link to={to}>
          <span className={styles.span1}>{name}</span>
        </Link>
      ) : (
        <div>
          <span className={styles.span1}>{name}</span>
          <span className={styles.span2}>{value}</span>
        </div>
      )}
    </li>
  );
};

export default Item;
