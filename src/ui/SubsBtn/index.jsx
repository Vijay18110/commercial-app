import React from "react";

import styles from "./index.module.css";
import Button from "../../widgets/Button";

const SubsBtn = ({ name, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.btn}>
      {name}
    </Button>
  );
};

export default SubsBtn;
