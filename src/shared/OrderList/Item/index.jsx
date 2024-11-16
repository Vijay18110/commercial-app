import React from "react";
import styles from "../index.module.css";

const Item = ({ name }) => {
  return <li className={styles.li}>{name}</li>;
};

export default Item;
