import React from "react";
import Container from "../../ui/Container";
import styles from './index.module.css';
import wave from '../../assets/aboutcarousal/wave.png';
import Button from "../../widgets/Button";
import img1 from '../../assets/aboutcarousal/about-7.png'
import img2 from '../../assets/aboutcarousal/about-8.png'
import Absimg from "../AboutCard2abs";
const Team = () => {
    return <Container>
        <div className={styles.cont}>
            <div>
                <h1>Our Team</h1>
                <img src={wave} alt="" />
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    <span>Our Team</span>
                    <h1>Meet Our Expert Team</h1>
                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <button className={styles.btn}>
                        View all Members
                    </button>
                </div>
                <div className={styles.right}>
                    <div className={styles.imgCont1}>
                        <img src={img1} alt="" />
                        <Absimg h1="H. Merinda" h2="CEO & Co-Founder" />
                    </div>
                    <div className={styles.imgCont2}>
                        <img src={img2} alt="" />

                        <Absimg h1="Dilan cter" h2="Head Engineer" />

                    </div>
                </div>
            </div>
        </div>
    </Container>;
};

export default Team;
