import React from "react";
import styles from './index.module.css';
import img from '../../assets/about-1.png'
import img2 from '../../assets/aboutcarousal/about-2.png'
import img3 from '../../assets/aboutcarousal/about-3.png'
import img4 from '../../assets/aboutcarousal/about-4.png'
import MultiCarousel from "../../shared/Carousel";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
};
const aboutCarousal = [
    { id: 1, img: img2 },
    { id: 2, img: img3 },
    { id: 3, img: img4 },
    { id: 3, img: img4 },
    { id: 3, img: img4 },
    { id: 3, img: img4 },

]
const Wnest = () => {
    return <div className={styles.cont}>
        <div className={styles.imgCont}>
            <img src={img} alt="" />
        </div>
        <div className={styles.rightContent}>
            <h1>Welcome to Nest</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
            <p>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
            <div className={styles.carousal}>

                <MultiCarousel autoPlay={true} infinite={true} autoPlaySpeed={1000} arrows={false} responsive={responsive}>
                    {
                        aboutCarousal.map((item) => {
                            return (
                                <div className={styles.cimgCont}>
                                    <img src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
                </MultiCarousel>
            </div>
        </div>
    </div>;
};

export default Wnest;
