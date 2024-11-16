import React from "react";
import img1 from "../../assets/MiniCat/poster1.png";
import styles from "./index.module.css";

const posterData1 = [
  {
    id: 1,
    src: img1,
    title: "Poster",
    heading: "Oganic",
    name: "Save 17% on Oganic juice",
  },
];

const Poster = () => {
  return (
    <div className={styles.postCont}>
      {posterData1.map((it) => {
        return (
          <>
            <div className={styles.imgCont}>
              <img src={it.src} alt={it.title} />
            </div>
            <div className={styles.contentCont}>
              <div className={styles.heading}>{it.heading}</div>
              <div className={styles.content}>{it.name}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Poster;
