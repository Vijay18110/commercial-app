import React from "react";
import styles from "./index.module.css";
import Newsletter from "../../ui/Newsletter";
import Button from "../../widgets/Button";
import { FaArrowRight } from "react-icons/fa6";
import ShopBtn from "../../ui/ShopBtn";

const Banner = ({ it, module, additionalStyle }) => {
  return (
    <div key={it.id} className={styles.banner} style={{ backgroundImage: `url(${it.img})`, ...additionalStyle }}>
      <div className={styles.content}>
        <div className={styles.top}>
          {it.title ? (
            <h4>{it.title}</h4>
          ) : (
            <h2>
              {it.title1}
              <br />
              {it.title2}
            </h2>
          )}
          {it.desc && <p>{it.desc}</p>}
        </div>
        {module === "banner" ? <Newsletter /> : <ShopBtn name="Shop Now" />}
      </div>
    </div>
  );
};

export default Banner;
