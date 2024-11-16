import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutpCart from "../../components/aboutproduct";
import Secondlast from "../../components/Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import banner from "../../assets/banner-9.png";
import bannerbg from "../../assets/banner10.png";
import Banner2 from "../../components/Banner2";
import Mainportal from "../../Modal/mainportal";
import LoginComp from "../../components/LoginComp";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui";
import RegisterComp from "../../components/RegisterComp";
import Forgotpass from "../../components/ForgotComp";
import ResetComp from "../../components/ResetCom";
import { useGenerateCode } from "../../hooks/useGenerateCode";
import Loader from "../../Loader/loader";

const Public = ({ element, onHover }) => {
  const [fpDta, setfpDta] = useState({});
  const { stringCode } = useGenerateCode();
  const [scr, setScr] = useState("login");
  const dispatch = useDispatch();
  const loginModal = useSelector((state) => state.ui.loginModal);
  const onClose = () => {
    setScr("login");
    dispatch(uiActions.onOpenLoginModal(false));
  };
  const onChangeScreen = (s, dta) => {
    if (dta) {
      setfpDta(dta);
    }
    console.log(dta);

    setScr(s);
  };
  const changeScreen = () => {
    setScr("forgot");
  };
  let screen = "";
  switch (scr) {
    case "login":
      screen = (
        <LoginComp
          stringCode={stringCode}
          onClick={() => onChangeScreen("register")}
          onGoToForgot={() => onChangeScreen("forgot")}
        />
      );
      break;
    case "register":
      screen = <RegisterComp stringCode={stringCode} onClick={() => onChangeScreen("login")} />;
      break;
    case "resetpin":
      screen = <ResetComp fpDta={fpDta} changeScreen={changeScreen} />;
      break;

    default:
      screen = <Forgotpass stringCode={stringCode} onClick={(s, fpd) => onChangeScreen(s, fpd)} />;
  }
  return (
    <main>
      {loginModal && <Mainportal onClose={onClose}>{screen}</Mainportal>}
      <Header onHover={onHover} />
      <Navbar />
      {element}
      <Banner2
        it={{
          id: 1,
          title1: "Stay home & get your daily needs from our shop",
          title2: "Start You'r Daily Shopping with   Nest Mart",
          desc: "Sign up for the daily newsletter",
          img: banner,
          img2: bannerbg,
        }}
      />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
      <Footer />
    </main>
  );
};
export default Public;
