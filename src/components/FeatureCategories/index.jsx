import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import styles from "./index.module.css";
import MultiCarousel from "../../shared/Carousel";
import FCard from "../FCard";
import snack from "../../assets/FoodCat/img5.png";
import cake from "../../assets/FoodCat/img1.png";
import kiwi from "../../assets/FoodCat/img2.png";
import peach from "../../assets/FoodCat/img3.png";
import redApp from "../../assets/FoodCat/img4.png";
import vegetables from "../../assets/FoodCat/img6.png";
import strawberry from "../../assets/FoodCat/img7.png";
import pulm from "../../assets/FoodCat/img8.png";
import custard from "../../assets/FoodCat/img9.png";
import coffee from "../../assets/FoodCat/img10.png";
import headphone from "../../assets/FoodCat/img11.png";
import Container from "../../ui/Container";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const fFoods = [
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
  { id: 1, category: "pet", name: "Cake & Milk", img: cake, items: "26", bg: "#F2FCE4" },
  { id: 2, category: "cake", name: "Organic Kiwi", img: kiwi, items: "28", bg: "#FFFCEB" },
  { id: 3, category: "pet", name: "Peach", img: peach, items: "14", bg: "#ECFFEC" },
  { id: 4, category: "veg", name: "Red Apple", img: redApp, items: "54", bg: "#FEEFEA" },
  { id: 5, category: "pet", name: "Snack", img: snack, items: "56", bg: "#FFF3EB" },
  { id: 6, category: "cake", name: "Vegetables", img: vegetables, items: "72", bg: "#FFF3FF" },
  { id: 7, category: "pet", name: "Strawberry", img: strawberry, items: "36", bg: "#F2FCE4" },
  { id: 8, category: "pet", name: "Black plum", img: pulm, items: "123", bg: "#FEEFEA" },
  { id: 9, category: "coffee", name: "Custard apple", img: custard, items: "34", bg: "#FFFCEB" },
  { id: 10, category: "pet", name: "Coffe & Tea", img: coffee, items: "89", bg: "#FEEFEA" },
  { id: 11, category: "coffee", name: "Headphone", img: headphone, items: "87", bg: "#ECFFEC" },
];

const FeatureCategories = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("pet");

  useEffect(() => {
    const filteredData = fFoods.filter((it) => it.category === active);
    setData(filteredData);
  }, []);

  const onGetMenu = (n) => {
    const filteredData = fFoods.filter((it) => it.category === n);
    setActive(n);
    setData(filteredData);
  };
  return (
    <Container>
      <div className={styles.featureCategories}>
        <SectionTitle title="Featured Categories" />
        <ul className={styles.ul}>
          <li className={active === "cake" ? styles.active : ""} onClick={() => onGetMenu("cake")}>
            Cake & Milk
          </li>
          <li className={active === "coffee" ? styles.active : ""} onClick={() => onGetMenu("coffee")}>
            Coffes & Teas
          </li>
          <li className={active === "pet" ? styles.active : ""} onClick={() => onGetMenu("pet")}>
            Pet Foods
          </li>
          <li className={active === "veg" ? styles.active : ""} onClick={() => onGetMenu("veg")}>
            Vegetables
          </li>
        </ul>
      </div>
      <MultiCarousel arrows={false} infinite={true} autoPlaySpeed={2000} autoPlay={true} responsive={responsive}>
        {data.map((it) => {
          return <FCard key={it.id} bg={it.bg} title={it.name} src={it.img} items={it.items} />;
        })}
      </MultiCarousel>
    </Container>
  );
};

export default FeatureCategories;
