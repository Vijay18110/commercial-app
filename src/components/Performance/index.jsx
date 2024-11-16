import React from "react";
import Container from "../../ui/Container";
import styles from './index.module.css';
import img1 from '../../assets/aboutcarousal/about-5.png'
import img2 from '../../assets/aboutcarousal/about-6.png'
const Performance = () => {
    return <Container>

        <div className={styles.cont}>
            <div className={styles.left}>
                <div className={styles.img1Coont}>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h4>Our performance</h4>
                <h1>Your Partner for e-commerce grocery solution</h1>
                <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia                </p>
            </div>
        </div>
        <div className={styles.cont}>
            <div>
                <h1>Who we are</h1>
                <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </div>
            <div>
                <h1>Our history</h1>
                <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </div> <div>
                <h1>Our mission</h1>
                <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </div>
        </div>
    </Container>;
};

export default Performance;
