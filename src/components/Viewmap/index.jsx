import React from "react";
import { mapdata } from "../../data/mapcarddata";
import MapCard from "../viewmapCard";
import styles from './index.module.css'
const Viewmaplist = () => {
    return <div className={styles.cont}>
        {
            mapdata.map((it) => {
                return (
                    <MapCard it={it} />
                )
            })
        }
    </div>;
};

export default Viewmaplist;
