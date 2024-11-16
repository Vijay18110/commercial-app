import React from "react";
import Container from "../../ui/Container";
import styles from './index.module.css';
import wave from '../../assets/aboutcarousal/wave.png'
import AboutCard from "../Aboutcard";
const Provide = () => {
    return <Container>
        <div className={styles.cont}>
            <h1>What We Provide?</h1>
            <div>
                <img src={wave} alt="wave" />
            </div>
            <div className={styles.cardCont}>
                <AboutCard />
                <AboutCard />
                <AboutCard />
                <AboutCard />
                <AboutCard />
                <AboutCard />
            </div>
        </div>
    </Container>
};

export default Provide;
