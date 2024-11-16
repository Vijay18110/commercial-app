import React from "react";
import Banner from "../Banner";
import sb1 from "../../assets/FoodCat/sb2.png";
import sb2 from "../../assets/FoodCat/sb3.png";
import sb3 from "../../assets/FoodCat/sb1.png";

import styles from "./index.module.css";
import Container from "../../ui/Container";

const bannerData = [
  {
    id: 1,
    title: "Everyday Fresh & Clean with Our Products",
    img: sb1,
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    img: sb2,
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    img: sb3,
  },
];

const additionalStyle = {
  height: "300px",
  margin: "20px 0",
  padding: "0 50px",
  width: "100%",
};

const SubBanner = () => {
  return (
    <Container>
      <div className={styles.sBanner}>
        {bannerData.map((it) => (
          <Banner key={it.id} it={it} additionalStyle={additionalStyle} />
        ))}
      </div>
    </Container>
  );
};

export default SubBanner;
