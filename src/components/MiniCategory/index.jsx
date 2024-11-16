import React from "react";
import styles from "./index.module.css";
import cat1 from "../../assets/MiniCat/category-1.svg";
import cat2 from "../../assets/MiniCat/category-2.svg";
import cat3 from "../../assets/MiniCat/category-3.svg";
import cat4 from "../../assets/MiniCat/category-4.svg";
import cat5 from "../../assets/MiniCat/category-5.svg";
import Mini_cat_Card from "./Mini_cat_Card";

const CatcardData = [
  { id: 1, src: cat1, icon: "Icon", counter: 12, name: "Milks & Dairies" },
  { id: 2, src: cat2, icon: "Icon", counter: 23, name: "Clothing" },
  { id: 3, src: cat3, icon: "Icon", counter: 54, name: "Pet Foods" },
  { id: 4, src: cat4, icon: "Icon", counter: 89, name: "Baking material" },
  { id: 5, src: cat5, icon: "Icon", counter: 88, name: "Fresh Fruit" },
];

const MiniCategory = () => {
  return (
    <div className={styles.Cont}>
      <h5>Category</h5>
      <ul className={styles.ul}>
        {CatcardData.map((it) => {
          return (
            <li className={styles.li}>
              <Mini_cat_Card
                key={it.id}
                img={it.src}
                name={it.name}
                icon={it.icon}
                counter={it.counter}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MiniCategory;
