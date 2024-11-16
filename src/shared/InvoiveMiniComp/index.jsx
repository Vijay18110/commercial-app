import React from "react";
import styles from "./index.module.css";
const InvoiceMiniComp = ({ Uname1, Uname2, Uname3 }) => {
  return (
    <div className={styles.ContMiniComp}>
      <h4>{Uname1}</h4>
      <strong>{Uname2}</strong>
      <p>{Uname3}</p>
    </div>
  );
};

export default InvoiceMiniComp;
