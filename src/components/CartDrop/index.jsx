import React from "react";
import styles from './index.module.css';
import img1 from '../../assets/thumbnail-3.jpg'
import img2 from '../../assets/thumbnail-2.jpg'

const CartDrop = () => {
    return <div className={styles.cont}>
        <div className={styles.acc}>
            <div>
                <div className={styles.imgCont}>
                    <img src={img1} alt="" />
                </div>
                <div >
                    <span className={styles.p}>
                        <span>Daisy Casual Bag</span>
                        <span>X</span>
                    </span>
                    <p>1 × $800.00</p>
                </div>
            </div>
            <div>
                <div className={styles.imgCont}>
                    <img src={img1} alt="" />
                </div>
                <div >
                    <span className={styles.p}>
                        <span>Corduroy Shirts</span>
                        <span>X</span>
                    </span>
                    <p>1 × $3200.00</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <span>Total</span> <span>$ 4000.</span>
                </div>

                <span className={styles.btnCont}>
                    <span>  <button>view Cart</button></span>
                    <span><button>checkout</button></span>
                </span>

            </div>
        </div>
    </div >;
};


export default CartDrop;
