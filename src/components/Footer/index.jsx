import React from "react";
import styles from './index.module.css';
import { MdFacebook } from "react-icons/md";
import { PiInstagramLogo, PiTwitterLogo, PiYoutubeLogo } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import Container from "../../ui/Container";
const Footer = () => {
    return <Container>
        <div className={styles.footercont}>
            <div>
                <p>© 2024, <span className={styles.nest}> Nest</span> - HTML Ecommerce Template</p>
                <p>All rights reserved </p>
            </div>
            <div>
                <p>
                    <div className={styles.mid}>
                        <p> <span> <FaPhoneVolume size={25} color="#7e7e7e" /></span> 1900 - 6666</p>
                        <p> Working 8:00 - 22:00</p>
                    </div>
                    <div className={styles.mid}>
                        <p><span> <FaPhoneVolume size={25} color="#7e7e7e" /></span> 1900 - 8888</p>
                        <p>24/7 Support Center</p>
                    </div>
                </p>
            </div>
            <div className={styles.iconscont}>
                <p className={styles.icons}>
                    <span>Follow Us</span>
                    <span><MdFacebook /></span>
                    <span><PiTwitterLogo /></span>
                    <span><PiInstagramLogo /></span>
                    <span><PiYoutubeLogo /></span>
                </p>
                <p>
                    <span>Up to 15% discount on your first subscribe</span>
                </p>
            </div>
        </div>
    </Container>
};

export default Footer;
