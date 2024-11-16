import React from "react";
import styles from "./index.module.css";
import img from "../../assets/Invoice/logo-light.svg";

const Bg_Banner = [
  {
    id: 1,
    img: img,
    titile: "logo",
    topItem: "Date: 30 Nov 2024",
    botItem: "Invoice No: #IVSF1970191",
  },
];

const BG_Banner = () => {
  return (
    <div className={styles.bg_Banner}>
      <div className={styles.row}>
        {Bg_Banner.map((it) => {
          return (
            <div className={styles.box}>
              <div className={styles.left}>
                <img src={it.img} alt={it.titile} />
              </div>
              <div className={styles.right}>
                <p className={styles.top}>{it.topItem}</p>
                <p className={styles.bottom}>{it.botItem}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BG_Banner;
