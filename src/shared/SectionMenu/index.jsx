import React from "react";
import styles from "./index.module.css";
import SectionTitle from "../SectionTitle";

const SectionMenu = ({ title, onGetMenu, lists, active }) => {
  return (
    <div className={styles.pProducts}>
      <SectionTitle title={title} />
      <ul className={styles.ul}>
        {lists.map((it) => (
          <li key={it.id} className={active === it.active ? styles.active : ""} onClick={() => onGetMenu(it.active)}>
            {it.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionMenu;
