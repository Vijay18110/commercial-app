import React from "react";
import styles from './index.module.css'
import img from '../../assets/contact-2.png'
import Container from "../../ui/Container";

const ContactComp = () => {
    return <Container>
        <div className={styles.contactcont}>
            <div className={styles.left}>
                <h4> Contact form</h4>
                <h1>Drop Us a Line</h1>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className={styles.inputGroup}>
                    <div className={styles.inputCont}>

                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="email" />
                    </div>
                    <div className={styles.inputCont}>
                        <input type="text" placeholder="phone" />
                        <input type="text" placeholder="subject" />
                    </div>

                    <textarea placeholder="message" name="" id=""></textarea>
                    <button className={styles.button}>Send Message</button>
                </div>
            </div>
            <div className={styles.right}>
                <img src={img} alt="" />
            </div>
        </div>;
    </Container>
};

export default ContactComp;
