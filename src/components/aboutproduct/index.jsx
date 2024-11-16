import React from "react";
import Cart from "../../components/aboutpCard";
import styles from './index.module.css';
import Container from "../../ui/Container";
const AboutpCart = ({ cartdata }) => {
    return <Container>
        <div className={styles.cont}>
            {
                cartdata.map((it, index) => {
                    return (
                        <Cart key={index} data={it} />
                    )
                })
            }
        </div>;
    </Container>
};

export default AboutpCart;

