import React, { useState } from "react";
import Banner from "../Banner";
import banner from "../../assets/dailySellsBan.png";
import MultiCarousel from "../../shared/Carousel";
import ProductCard from "../ProductCard";
import { pProducts } from "../../data";
import styles from "./index.module.css";
import SectionMenu from "../../shared/SectionMenu";

const DailyBS = () => {
  const [active, setActive] = useState("feature");

  const menuLists = [
    { id: 1, name: "Feature", active: "feature" },
    { id: 2, name: "Popular", active: "popular" },
    { id: 3, name: "New Added", active: "new" },
  ];

  const onGetMenu = (n) => {
    setActive(n);
  };

  const additionalStyle = {
    height: "500px",
    margin: "20px 0",
    padding: "0 50px",
    width: "100%",
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <SectionMenu title="Daily Best Sells" active={active} onGetMenu={onGetMenu} lists={menuLists} />
      <div className={styles.dailyBS}>
        <div className={styles.left}>
          <Banner it={{ title: "Bring nature into your home", img: banner }} additionalStyle={additionalStyle} />
        </div>
        <div className={styles.right}>
          <MultiCarousel
            partialVisible={true}
            infinite={true}
            autoPlaySpeed={2000}
            autoPlay={true}
            responsive={responsive}
            arrows={false}
          >
            {pProducts.map((it, index) => (
              <div key={index} className={styles.cardP}>
                <ProductCard module="daily" it={it} />
              </div>
            ))}
          </MultiCarousel>
        </div>
      </div>
    </div>
  );
};

export default DailyBS;
