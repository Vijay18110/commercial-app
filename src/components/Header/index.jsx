import React from "react";
import Item from "./Item/inde";
import { GiRecycle } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";

import styles from "./index.module.css";
import Container from "../../ui/Container";
import { countries, currency, language, leftMenu } from "../../data/header";
import logo from "../../assets/logo.svg";
import Icon from "../../ui/Icon";
import Select2 from "../../widgets/Select2";
import Location from "../../widgets/Location";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SubmitButton from "../../widgets/SubmitButton/Index";
import SubsBtn from "../../ui/SubsBtn";
import { uiActions } from "../../Store/ui";

const icons = [
  { id: 1, name: "Compare", counter: "3", icon: <GiRecycle size={30} /> },
  { id: 2, name: "Wishlists", counter: "6", icon: <GoHeart size={30} /> },
  { id: 3, name: "Cart", counter: "2", icon: <IoCartOutline size={30} /> },
  { id: 4, name: "Account", counter: null, icon: <LuUser size={30} /> },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    minHeight: "30 !important",
    minWidth: 120,
    height: "30px",
    paddingBottom: "50px",
    textAlign: "center",
  }),
  option: (styles, { isSelected }) => {
    return { ...styles, backgroundColor: isSelected ? "#3bb77e" : "white" };
  },
};

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    borderRadius: 10,
    content: '"📍"',
    display: "block",
    marginRight: 8,
  },
});

const colourStylesLocation = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    minHeight: "30 !important",
    height: "50px",
    textAlign: "center",
    alignItems: "center",
    minWidth: 250,
  }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot() }),
};

const Header = ({ onHover }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <ul className={styles.left}>
            {leftMenu.map((it) => (
              <Item key={it.id} name={it.name} to={it.to} />
            ))}
          </ul>
          <p>Trendy 25silver jewelry, save up 35% off today</p>
          <ul className={styles.right}>
            <Item name="Need help? Call Us:" value="+ 1800 900" />
            <Item
              name={
                <Select2
                  colourStyles={colourStyles}
                  options={language}
                  isSearchable={false}
                  defaultValue={language[0]}
                />
              }
            />
            <Item
              name={
                <Select2
                  colourStyles={colourStyles}
                  options={currency}
                  isSearchable={false}
                  defaultValue={currency[0]}
                />
              }
            />
          </ul>
        </div>
        <div className={styles.content}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <SearchBar />
          <Location
            colourStyles={colourStylesLocation}
            options={countries}
            isSearchable={false}
            defaultValue={countries[1]}
          />

          <div className={styles.iconCont}>
            {token ? (
              icons.map((it) => (
                <Icon onHover={onHover} key={it.id} counter={it.counter} name={it.name}>
                  {it.icon}
                </Icon>
              ))
            ) : (
              <SubsBtn
                onClick={(e) => {
                  dispatch(uiActions.onOpenLoginModal(true));
                }}
                name="Login"
              />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
