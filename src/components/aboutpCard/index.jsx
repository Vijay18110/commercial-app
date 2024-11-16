import React from "react";
import styles from './index.module.css';
const Cart = ({ data }) => {
    return <div className={styles.cartcont}>
        <div className={styles.left}>
            <img src={data.img} alt="logo" />
        </div>
        <div className={styles.right}>
            <span>{data.title}</span>
            <span>{data.decs}</span>
            <span>{data.decs2}</span>
        </div>
    </div>;
};
export default Cart;
