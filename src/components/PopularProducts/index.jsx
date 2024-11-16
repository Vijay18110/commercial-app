import React, { useState, useEffect } from "react";
import { pProducts } from "../../data";
import ProductCard from "../ProductCard";

import styles from "./index.module.css";
import SectionMenu from "../../shared/SectionMenu";

const PopularProducts = () => {
  const [active, setActive] = useState("pet");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (active === "all") {
      return setData(pProducts.slice(0, 10));
    }
    const filteredData = pProducts.filter((it) => it.masterCat === active);

    if (filteredData.length > 10) {
      const slicedData = filteredData.slice(0, 10);
      setData(slicedData);
    } else {
      setData(filteredData);
    }
  }, [active]);

  const onGetMenu = (n) => {
    setActive(n);
  };

  const menuLists = [
    { id: 1, name: "All", active: "all" },
    { id: 2, name: "Milks & Diaries", active: "milks" },
    { id: 3, name: "Coffes & Teas", active: "coffee" },
    { id: 4, name: "Pet Foods", active: "pet" },
    { id: 5, name: "Fruits", active: "fruits" },
    { id: 6, name: "Meats", active: "meats" },
    { id: 7, name: "Vegetables", active: "veg" },
  ];

  return (
    <div className={styles.main}>
      <SectionMenu title="Popular Products" active={active} onGetMenu={onGetMenu} lists={menuLists} />
      <div className={styles.popularProducts}>
        {data.map((it, index) => (
          <ProductCard key={index} it={it} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
