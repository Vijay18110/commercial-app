import React from "react";
import Button from "../../widgets/Button";
import { FaArrowRight } from "react-icons/fa6";

import styles from "./index.module.css";

const ShopBtn = ({ name }) => {
  return (
    <Button className={styles.btn}>
      {name} <FaArrowRight className={styles.icon} />
    </Button>
  );
};

export default ShopBtn;
