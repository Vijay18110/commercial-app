import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FaStar } from "react-icons/fa";
import { BiStar } from "react-icons/bi";
import CartBtn from "../../ui/CartBtn";
const DealCard = ({ it }) => {
  const [sec, setSec] = useState(59);
  const [min, setMin] = useState(59);
  const [hours, setHours] = useState(2);
  const [days, setDays] = useState(1);
  const [time, setTime] = useState("");
  const watch = () => {
    if (days == 0 && hours == 0 && min == 0 && sec == 0) {
      alert("time out");
    }
    else {
      if (sec == 0) {
        setSec(59);
        if (min == 0) {
          setMin(59)
        }
        else {
          setMin((min) => min - 1)
        }
        if (min == 0) {
          if (hours == 0) {
            setHours(23);
          }
          else {
            setHours((h) => h - 1)
          }

          if (hours == 0) {
            if (days == 0) {
              setDays(0);
            }
            else {
              setDays((d) => d - 1)
            }
          }
        }
      }
      else {
        setSec((S) => S - 1)
      }
    };
  }
  const ti = () => {
    const d = new Date().getSeconds();
    setTime(d);
  }
  useEffect(() => {
    watch()
    setInterval(ti, 1000);

  }, [time]);
  return (
    <div className={styles.dealCard}>
      <div className={styles.productImg}>
        <img src={it.img} alt={it.itemName} />
      </div>
      <div className={styles.contt}>
        <div className={styles.time}>
          <div>
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div>
            <span>{hours}</span>
            <span>Hours</span>
          </div>
          <div>
            <span>{min}</span>
            <span>Mins</span>
          </div>
          <div>
            <span>{sec}</span>
            <span>Sec</span>
          </div>
        </div>
        <div className={styles.contentCont}>
          <p className={styles.cat}>{it.name}</p>
          <h4>{it.itemName}</h4>
          <p className={styles.rating}>
            {[1, 2, 3, 4, 5].map((itm, index) => (itm <= it.rating ? <FaStar key={index} color="#FDC040" /> : <BiStar key={index} />))}
            <span>({it.rating})</span>
          </p>
          <p className={styles.comp}>
            By <span>{it.company}</span>
          </p>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <span className={styles.cPrice}>${it.price}</span>
              <span className={styles.oPrice}>${it.ogPrice}</span>
            </div>
            <CartBtn name="Add" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DealCard;
