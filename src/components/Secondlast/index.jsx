import React from "react";
import styles from './index.module.css';
// import { IoStar } from "react-icons/io5";
import logo from '../../assets/logo.svg'
import { MdEditLocation } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import img1 from '../../assets/slogo/app-store.jpg'
import img2 from '../../assets/slogo/google-play.jpg'
import payment from '../../assets/slogo/payment.png'
import Container from "../../ui/Container";
const Secondlast = ({ productsdata }) => {
    return <Container>
        <div className={styles.productsCont}>
            <div className={styles.main}>
                <div style={{ backgroundImage: `url(${logo})` }} className={styles.logoCont}>
                </div>
                <div className={styles.list}>
                    <span>Awesome grocery store website <br />template</span>
                    <p>
                        <span><MdEditLocation /></span>
                        <span>Address: 5171 W Campbell AveKent,<br /> Utah 53127 United States</span>
                    </p>
                    <p>
                        <span><SlEarphones /></span>
                        <span>Call Us:(+91) - 540-025-124553 </span>
                    </p>
                    <p>
                        <span><IoIosSend /></span>
                        <span>Email:sale@Nest.com</span>
                    </p>
                    <p>
                        <span> <IoIosTime /></span>
                        <span>Hours:10:00 - 18:00, Mon - Sat</span>
                    </p>
                </div>



            </div>
            <div className={styles.main}>
                <h2> About Us</h2>
                {
                    productsdata.map((item, index) => {
                        if (item.name === "About Us") {
                            return <div key={index} className={styles.list}>
                                <span>{item.s1}</span>
                                <span>{item.s2}</span>
                                <span>{item.s3}</span>
                                <span>{item.s4}</span>
                                <span>{item.s5}</span>
                                <span>{item.s6}</span>
                                <span>{item.s7}</span>
                            </div>
                        }
                    })
                }
            </div>
            <div>
            </div> <div className={styles.main}>
                <h2>Account</h2>
                {
                    productsdata.map((item, index) => {
                        if (item.name === "Account") {
                            return <div key={index} className={styles.list}>
                                <span>{item.s1}</span>
                                <span>{item.s2}</span>
                                <span>{item.s3}</span>
                                <span>{item.s4}</span>
                                <span>{item.s5}</span>
                                <span>{item.s6}</span>
                                <span>{item.s7}</span>
                            </div>
                        }
                    })
                }
            </div>
            <div>
            </div> <div className={styles.main}>
                <h2> Corporate</h2>
                {
                    productsdata.map((item, index) => {
                        if (item.name === "Corporate") {
                            return <div key={index} className={styles.list}>
                                <span>{item.s1}</span>
                                <span>{item.s2}</span>
                                <span>{item.s3}</span>
                                <span>{item.s4}</span>
                                <span>{item.s5}</span>
                                <span>{item.s6}</span>
                                <span>{item.s7}</span>
                            </div>
                        }
                    })
                }
            </div>
            <div>
            </div> <div className={styles.main}>
                <h2>Popular</h2>
                {
                    productsdata.map((item, index) => {
                        if (item.name === "Popular") {
                            return <div key={index} className={styles.list}>
                                <span>{item.s1}</span>
                                <span>{item.s2}</span>
                                <span>{item.s3}</span>
                                <span>{item.s4}</span>
                                <span>{item.s5}</span>
                                <span>{item.s6}</span>
                                <span>{item.s7}</span>
                            </div>
                        }
                    })
                }
            </div>
            <div>
            </div>

        </div>;
        <div className={styles.btncont}>
            <h1>Install App</h1>
            <p>From App Store or Google Play</p>
            <div className={styles.appimgcont}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <div style={{ backgroundImage: `url(${payment})` }} className={styles.imgcont}></div>
        </div>
    </Container>
}
export default Secondlast;