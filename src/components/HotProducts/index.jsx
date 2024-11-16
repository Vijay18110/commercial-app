import React from "react";
import styles from './index.module.css';
import { IoStar } from "react-icons/io5";

const HotProducts = ({ productsdata }) => {
    return <div className={styles.productsCont}>

        <div className={styles.main}>
            <div>top Selling</div>
            {
                productsdata.map((item, index) => {
                    if (item.category === "topSelling") {
                        return <div key={index} className={styles.list}>
                            <div className={styles.imgcont}> <img src={item.img} alt="" /></div>
                            <div className={styles.right}>
                                <h2>{item.name}</h2>
                                <div className={styles.rs}>
                                    <span>
                                        {
                                            [1, 2, 3, 4, 5].map((it) => {
                                                if (it <= item.rating) {
                                                    return (
                                                        <IoStar color="rgb(253, 192, 64)" />
                                                    )
                                                }
                                                else {
                                                    return <IoStar />
                                                }
                                            })
                                        }
                                    </span>
                                    <span> ({item.rating})</span>
                                </div>
                                <p className={styles.price}>
                                    <del> <span>${item.price} </span></del>
                                    <span>${item.offerprice}</span>
                                </p>
                            </div>
                        </div>
                    }
                })
            }
        </div>
        <div>
        </div>
        <div className={styles.main}>
            <div>trending Products</div>

            {

                productsdata.map((item, index) => {

                    if (item.category === "trendingProducts") {
                        return <div key={index} className={styles.list}>
                            <div className={styles.imgcont}> <img src={item.img} alt="" /></div>
                            <div className={styles.right}>
                                <h2>{item.name}</h2>
                                <div className={styles.rs}>

                                    <span>
                                        {
                                            [1, 2, 3, 4, 5].map((it, index) => {
                                                if (it <= item.rating) {
                                                    return (
                                                        <IoStar key={index} color="rgb(253, 192, 64)" />
                                                    )
                                                }
                                                else {
                                                    return <IoStar />
                                                }
                                            })
                                        }
                                    </span>
                                    <span> ({item.rating})</span>
                                </div>
                                <p className={styles.price}>
                                    <del> <span>${item.price} </span></del>
                                    <span>${item.offerprice}</span>
                                </p>
                            </div>
                        </div>
                    }
                })
            }
        </div>
        <div>
        </div>
        <div className={styles.main}>
            <div>recently Added</div>

            {
                productsdata.map((item, index) => {
                    if (item.category === "recentlyAdded") {
                        return <div key={index} className={styles.list}>
                            <div className={styles.imgcont}> <img src={item.img} alt="" /></div>
                            <div className={styles.right}>
                                <h2>{item.name}</h2>
                                <div className={styles.rs}>

                                    <span>
                                        {
                                            [1, 2, 3, 4, 5].map((it, index) => {
                                                if (it <= item.rating) {
                                                    return (
                                                        <IoStar key={index} color="rgb(253, 192, 64)" />
                                                    )
                                                }
                                                else {
                                                    return <IoStar />
                                                }
                                            })
                                        }
                                    </span>
                                    <span> ({item.rating})</span>
                                </div>
                                <p className={styles.price}>
                                    <del> <span>${item.price} </span></del>
                                    <span>${item.offerprice}</span>
                                </p>
                            </div>
                        </div>
                    }
                })
            }
        </div>
        <div>
        </div>
        <div className={styles.main}>
            <div>top Added</div>
            {
                productsdata.map((item, index) => {
                    if (item.category === "topAdded") {
                        return <div key={index} className={styles.list}>
                            <div className={styles.imgcont}> <img src={item.img} alt="" /></div>
                            <div className={styles.right}>
                                <h2>{item.name}</h2>
                                <div className={styles.rs}>

                                    <span>
                                        {
                                            [1, 2, 3, 4, 5].map((it, index) => {
                                                if (it <= item.rating) {
                                                    return (
                                                        <IoStar key={index} color="rgb(253, 192, 64)" />
                                                    )
                                                }
                                                else {
                                                    return <IoStar />
                                                }
                                            })
                                        }
                                    </span>
                                    <span> ({item.rating})</span>
                                </div>
                                <p className={styles.price}>
                                    <del> <span>${item.price} </span></del>
                                    <span>${item.offerprice}</span>
                                </p>
                            </div>
                        </div>
                    }
                })
            }
        </div>
        <div>
        </div>
    </div>;
};

export default HotProducts;
