import React from "react";
import styles from './index.module.css';
const Rfrom = ({ logo, from, bg, color }) => {
    return <div style={{ color: color, backgroundColor: bg }} className={styles.cont}>
        <span >{logo}</span>
        <span> {from}</span>
    </div>;
};

export default Rfrom;
