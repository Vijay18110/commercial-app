import React from "react";
import styles from "./index.module.css";
import { CiSearch } from "react-icons/ci";

const InputField = () => {
  return (
    <form>
      <input className={styles.input} type="search" placeholder="Serach..." />
      <button>
        <CiSearch size={25} />
      </button>
    </form>
  );
};

export default InputField;
