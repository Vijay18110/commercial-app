import React from "react";
import styles from './index.module.css';
import Newsletter from "../../ui/Newsletter";
import Container from "../../ui/Container";
const Banner2 = ({ it }) => {
    return <Container>
        <div style={{ backgroundImage: `url(${it.img2})` }} className={styles.banner2cont}>
            <div className={styles.content}>
                <div className={styles.top}>
                    {it.title ? (
                        <h4>{it.title}</h4>
                    ) : (
                        <h2>
                            {it.title1}
                            <br />
                        </h2>
                    )}
                    {it.desc && <p>{it.desc}</p>}
                </div>
                <Newsletter />

            </div>
            <div className={styles.imgcontainer}>
                <img src={it.img} alt="" />
            </div>
        </div>;
    </Container>
};

export default Banner2;
