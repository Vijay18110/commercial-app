import React from "react";
import styles from "./index.module.css";
import img1 from "../../assets/MiniCat/img1.jpg";
import img2 from "../../assets/MiniCat/img2.jpg";
import img3 from "../../assets/MiniCat/img3.jpg";
import img4 from "../../assets/MiniCat/img4.jpg";
import Trending_Card from "./Trending_Card";

const termsData1 = [
  {
    id: 1,
    src: img1,
    title: "title",
    name: "Chen Cardigan",
    rupee: "150",
    rating: "star",
  },
  {
    id: 2,
    src: img2,
    title: "title",
    name: "Chen Sweater",
    rupee: "150",
    rating: "star",
  },
  {
    id: 3,
    src: img3,
    title: "title",
    name: "Colorful Jacket",
    rupee: "150",
    rating: "star",
  },
  {
    id: 4,
    src: img4,
    title: "title",
    name: "Lorem, ipsum",
    rupee: "150",
    rating: "star",
  },
];

const TrandingNow = () => {
  return (
    <div className={styles.Cont}>
      <h5>Trending Now</h5>
      <ul className={styles.ul}>
        {termsData1.map((it) => {
          return (
            <li className={styles.li}>
              <Trending_Card
                key={it.id}
                img={it.src}
                name={it.name}
                title={it.title}
                rupee={it.rupee}
                rating={it.rating}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrandingNow;
