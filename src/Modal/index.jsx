import React from "react";
import styles from "./index.module.css";
// import { IoCloseOutline } from "react-icons/io5";
import { first_poster } from "../data/first_poster";

const Modal = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.modal_content}>
        {/* <div onClick={onClose} className={styles.close}>
          <IoCloseOutline size={20} />
        </div> */}
        <div className={styles.modal_body}>
          <div className={styles.modal_Poster}>
            {first_poster.map((it) => {
              return (
                <>
                  <div key={it.id}>
                    <div className={styles.modal_top}>{it.item1}</div>
                    <div className={styles.modal_mid}>
                      <h4>{it.item2}</h4>
                      <div className={styles.row}>
                        <div className={styles.box}>
                          <div className={styles.price}>{it.item3}</div>
                          <div>
                            <div className={styles.price_mini_1}>{it.item4}</div>
                            <div className={styles.price_mini_2}>{it.item5}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.modal_bot}>
                      <p>{it.item6}</p>
                      {/* <div>Hurry Up! Offer End In:</div> */}
                      <div>{it.item7}</div>
                      <div>{it.item8}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
