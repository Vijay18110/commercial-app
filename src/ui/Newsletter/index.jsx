import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

import styles from "./index.module.css";
import SubsBtn from "../SubsBtn";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div>
        <FaTelegramPlane className={styles.icon} />
        <input type="text" placeholder="Your Email Address" />
      </div>
      <SubsBtn name="Subscribe" />
    </div>
  );
};

export default Newsletter;
