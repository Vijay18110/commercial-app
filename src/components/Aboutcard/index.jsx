import React from "react";
import styles from './index.module.css';
import img1 from '../../assets/drowdown/category-1.svg'
const AboutCard = () => {
    return <div className={styles.cont}>
        <img src={img1} alt="" />
        <h1>Best Prices & Offers</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
        <span>Read More</span>
    </div>;
};

export default AboutCard;
