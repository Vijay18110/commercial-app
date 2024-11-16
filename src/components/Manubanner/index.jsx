import React from "react";
import styles from './index.module.css';
const Manubanner = ({ data }) => {
    return <div className={styles.banner} style={{ backgroundImage: `url(${data.img})` }}>
        <div className={styles.content}>
            <span>{data.title}</span>
            <span>{data.about}</span>
            <span>{data.desc}</span>
            <span>
                <button className={styles.btn}>Shop now</button>
            </span>
        </div>
    </div>
};

export default Manubanner;
