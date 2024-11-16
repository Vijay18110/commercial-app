import React from "react";
import styles from './index.module.css';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const Absimg = ({ h1, h2 }) => {
    return <div className={styles.cont}>
        <h1>{h1}</h1>
        <h2 className={styles.h2}>{h2}</h2>
        <div className={styles.iconCont}>
            <span><FaFacebook color="#3bb77e" /></span>
            <span><BsTwitter color="#3bb77e" /></span>
            <span><BsInstagram color="#3bb77e" /></span>
            <span><BsYoutube color="#3bb77e" /></span>
        </div>
    </div>;
};

export default Absimg;
