import React from "react";
import styles from './index.module.css';
const DropCard = ({ name, logo }) => {
    return <div className={styles.cartcont}>
        <div className={styles.div}>
            <div className={styles.imgCont}>
                <img src={logo} alt="" />
            </div>
            <span>{name}</span>
        </div>
    </div>;
};

export default DropCard;
