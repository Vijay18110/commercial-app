import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { IoCloseOutline } from "react-icons/io5";
const Overlay = ({ onClose }) => {
  return <div onClick={onClose} className={styles.overlay}></div>;
};
const Modal = (props) => {
  return (
    <div className={styles.modalCont}>
      <div onClick={props.onClose} className={styles.close}>
        <IoCloseOutline size={20} />
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const Mainportal = ({ children, onClose }) => {
  return (
    <Fragment>
      {createPortal(<Overlay onClose={onClose} />, document.getElementById("modal"))}
      {createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("modal"))}
    </Fragment>
  );
};
export default Mainportal;
