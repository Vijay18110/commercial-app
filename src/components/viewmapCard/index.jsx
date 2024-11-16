import React from "react";
import styles from './index.module.css';
import { IoLocationOutline } from "react-icons/io5";
const MapCard = ({ it }) => {
    return <div className={styles.cardCont}>
        <h1>{it.place}</h1>
        <p>{it.add}</p>
        <p>{it.mobile}</p>
        <p>{it.email}</p>
        <div>
            <button className={styles.btn}>
                <span><IoLocationOutline /></span>
                <span> View Map</span>
            </button>
        </div>
    </div>;

};
export default MapCard;
