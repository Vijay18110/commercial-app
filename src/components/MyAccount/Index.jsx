import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { RiEqualizerLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { LuLogOut, LuUser } from "react-icons/lu";
import Dashboard from "./Dashboard/Index";
import Orders from "./Orders/Index";
import TrackOrder from "./TrackOrders/Index";
import Address from "./Address/Index";
import Account from "./AccountDetail/Index";
import Home from "../../pages/Home";
import { useNavigate } from "react-router-dom";
import Container from "../../ui/Container";

 let data = [
  {
    id: 1,
    name: "Dashboard",
    activedata: "Dashboard",
  },
  {
    id: 2,
    name: "Orders",
    activedata: "Orders",
  },
  {
    id: 3,
    name: "Track Your Order",
    activedata: "Track",
  },
  {
    id: 4,
    name: "My Address",
    activedata: "Address",
  },
  {
    id: 5,
    name: "Account Details",
    activedata: "Account",
  },
  {
    id: 6,
    name: "Logout",
    activedata: "Logout",
  },
];
const MyAccount = () => {
  const jump=useNavigate();
  const [active, setactive] = useState("Dashboard");

  const [names, setnames] = useState([]);

  useEffect(() => {
    const fdata = data.filter((item) => {
      return item.activedata == active;
    });
    setnames(fdata);
  }, []);

  const ongetmenu = (n) => {
    let filterdata = data.filter((item) => {
      return item.activedata == n;
    });
    setactive(n);
    setnames(filterdata);
  };
  return (
    <>
    <Container>
      <div className={styles.myaccountcontainer}>
        <div className={styles.leftmenucontainer}>
          <div onClick={() => ongetmenu("Dashboard")} className={active == "Dashboard" ? styles.active : styles.psidemenucontainer}>
            <div className={styles.logo}> <RiEqualizerLine size={25} /></div>
            <div className={styles.name}>Dashboard</div>
          </div>
          <div onClick={() => ongetmenu("Orders")} className={active == "Orders" ? styles.active : styles.psidemenucontainer}>
            <div className={styles.logo}> <HiOutlineShoppingBag size={25} /></div>
            <div className={styles.name}>Orders</div>
          </div>
          <div onClick={() => ongetmenu("Track")} className={active == "Track" ? styles.active : styles.psidemenucontainer}>
            <div className={styles.logo}> <BsCart3 size={25} /></div>
            <div className={styles.name}>Track Your Order</div>
          </div>
          <div onClick={() => ongetmenu("Address")} className={active == "Address" ? styles.active : styles.psidemenucontainer}>
            <div className={styles.logo}> <SlLocationPin size={25} /></div>
            <div className={styles.name}>My Address</div>
          </div>
          <div onClick={() => ongetmenu("Account")} className={active == "Account" ? styles.active : styles.psidemenucontainer}>
            <div className={styles.logo}> <LuUser size={25} /></div>
            <div className={styles.name}>Account Detail</div>
          </div>
          <div onClick={() => ongetmenu("Logout")} className={active == "Logout" ? styles.active : styles.psidemenucontainer}>
            <div className={styles.logo}> <LuLogOut size={25} /></div>
            <div className={styles.name}>Logout</div>
          </div>
        </div>
        <div className={styles.rightcontentcontainer}>
            {active==="Dashboard" && <Dashboard/>}
            {active==="Orders" && <Orders/>}
            {active==="Track" && <TrackOrder/>}
            {active==="Address" && <Address/>}
            {active==="Account" && <Account/>}
            {active==="Logout" && jump("/")}
        </div>
      </div>
      </Container>
    </>
  );
};

export default MyAccount;
