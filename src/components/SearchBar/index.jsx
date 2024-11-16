import React from "react";
import Select2 from "../../widgets/Select2";
import { FaSearch } from "react-icons/fa";
import styles from "./index.module.css";

const colourStylesLocation = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    minHeight: "30 !important",
    minWidth: 150,
    border: "none",
    height:"50px",

    outline: "none",
    ":focus-visible": {
      outline: "none !important",
      border: "1px solid transparent",
    },
  }),
};

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Select2 colourStyles={colourStylesLocation} />
      <div className={styles.inputCont}>
        <input type="search" placeholder="Search for item..." />
        <FaSearch className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchBar;
