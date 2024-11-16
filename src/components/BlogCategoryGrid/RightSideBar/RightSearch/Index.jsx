import React from "react";
import styles from "./index.module.css";
import { GoSearch } from "react-icons/go";
const RightSearch = () => {
  return (
    <>
      <div className={styles.rightcontainer}>
        <div className={styles.searchicon}>
          <GoSearch size={20} />
        </div>
        <input type="text" placeholder="Search...." />
      </div>
    </>
  );
};

export default RightSearch;
