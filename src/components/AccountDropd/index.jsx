import React from "react";
import styles from "./index.module.css";
import { BiHeart, BiLocationPlus, BiUser } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { GiHole } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { authAction } from "../../Store/auth";

const AccountDrop = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem("login");
    dispatch(authAction.onAuthChange());
  };

  return (
    <div className={styles.cont}>
      <div className={styles.acc}>
        <p>
          <span>
            <BiUser />
          </span>
          <span>My Account</span>
        </p>
        <p>
          <span>
            <BiLocationPlus />
          </span>
          <span>Order tracking</span>
        </p>
        <p>
          <span>
            <GiHole />
          </span>
          <span>My Voucher</span>
        </p>
        <p>
          <span>
            <BiHeart />
          </span>
          <span>My Wishlist</span>
        </p>
        <p>
          <span>
            <IoSettings />
          </span>
          <span>Setting</span>
        </p>{" "}
        <p onClick={onLogout}>
          <span>
            <GoSignOut />
          </span>
          <span>Sign Out</span>
        </p>
      </div>
    </div>
  );
};

export default AccountDrop;
