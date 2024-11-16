import React from "react";
import { dealsData } from "../../data/dealsdata";
import DealCard from "../DealCard";

import styles from "./index.module.css";

const DealsOfTheYear = () => {
  return (
    <div className={styles.dealsOfTheYear}>
      {dealsData.map((it, index) => {
        return <DealCard key={index} it={it} />;
      })}
    </div>
  );
};

export default DealsOfTheYear;
