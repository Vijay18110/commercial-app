import React, { useReducer } from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import pass from "../../assets/forgot_password.svg";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "FORGOT":
      return { ...state, ...action.payload, termsAccepted: action.payload.termsAccepted === "on" ? false : true };

    default:
      return state;
  }
};
const Forgotpass = ({ onClick, stringCode }) => {
  const userdata = useSelector((state) => state.auth.userdata);
  const [state, dispatch] = useReducer(reducerFn, {
    username: "",
    sCode: "",
    termsAccepted: false,
  });
  const onGetUser = (e) => {
    let id = e.target.id;
    let val = e.target.checked ? e.target.checked : e.target.value;
    let newData = { [id]: val };
    dispatch({ type: "FORGOT", payload: newData });
  };
  const onVerifyUser = () => {
    if (state.username === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter  email!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    else if (!state.username.includes("@") || !state.username.includes(".")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid email!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    else if (state.sCode === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter security code",
        footer: '<a href="#">Why do I have this issue?</a>',
      })
    }
    else if (state.sCode !== stringCode.join('')) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter valid security code",
        footer: '<a href="#">Why do I have this issue?</a>',
      })
    }
    else {
      const isExisting = userdata.find((it) => it.username === state.username || it.email === state.username);
      debugger;
      if (isExisting) {
        onClick("resetpin", isExisting);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please enter valid email!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    };
  }
  return (
    <Container>
      <div className={styles.cont}>
        <div className={styles.right}>
          <div className={styles.imgCont}>
            <img src={pass} alt="" />
          </div>
          <h1>Forgot Password?</h1>
          <p>
            Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.
          </p>
          <input onChange={onGetUser} type="email" name="email" id="username" placeholder="Enter Email" />
          <div className={styles.securityCode}>
            <input onChange={onGetUser} type="text" name="" id="sCode" placeholder="security code" />
            <div className={styles.code}>
              <span>{stringCode[0]}</span>
              <span>{stringCode[1]}</span>
              <span>{stringCode[2]}</span>
              <span>{stringCode[3]}</span>
            </div>
          </div>
          {/* <div className={styles.rememberpass}>
            <div>
              <span>
                <input onChange={onGetUser} type="checkbox" id="termsAccepted" />
              </span>
              <span>I agree to terms & Policy.</span>
            </div>
            <div>
              <spaxn>learn</spaxn>
            </div>
          </div> */}
          {/* <Link to="/resetpass"> */}
          <div style={{ display: "flex", columnGap: "5px" }}>
            <button onClick={onVerifyUser}> reset password</button>
            <button onClick={() => onClick("login")}>back</button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </Container>
  );
};

export default Forgotpass;
