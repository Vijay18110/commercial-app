import React, { useReducer } from "react";
import styles from "./index.module.css";
import img from "../../assets/login-1.png";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store/auth";
import { uiActions } from "../../Store/ui";
import Swal from "sweetalert2";
const reducerFn = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload, remember: action.payload.remember === "on" ? false : true };
    default:
      return state;
  }
};
const LoginComp = ({ onClick, onGoToForgot, stringCode }) => {
  const dispatchAction = useDispatch();
  const userdata = useSelector((state) => state.auth.userdata);
  const [state, dispatch] = useReducer(reducerFn, {
    username: "",
    password: "",
    sCode: "",
    remember: "",
  });
  const onGetData = (e) => {
    let id = e.target.id;
    let val = e.target.checked ? e.target.checked : e.target.value;

    let newData = { [id]: val };
    dispatch({ type: "LOGIN", payload: newData });
  };

  const onLoginUser = () => {
    if (state.username.includes("@") && !state.username.includes(".")) {
      Swal.fire("Please Enter Valid Email");
    } else if (state.username === "") {
      Swal.fire("Please Enter Username");
    } else if (state.username.length < 3) {
      Swal.fire("Please Enter Valid Username");
    } else if (state.password.length < 6) {
      Swal.fire("Invalid Credentials!");
    } else if (state.sCode === "") {
      Swal.fire("Please Enter Security Code");
    } else if (state.sCode !== stringCode.join("")) {
      Swal.fire("Invalid Security Code");
    } else {
      const isExistinguser = userdata.find((it) => it.email === state.username && it.password === state.password);
      if (isExistinguser) {
        const { password, cpassword, ...rest } = isExistinguser;
        localStorage.setItem("login", JSON.stringify(rest));
        dispatchAction(uiActions.onOpenLoginModal(false));
        dispatchAction(authAction.onAuthChange());
        // if(state.remember){
        //   localStorage.setItem("userdetails", isExistinguser)
        // }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User not exist!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    }
  };
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.left}>
          <img src={img} alt="" />
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          <p>
            Don't have an account? <span onClick={onClick}>Create here</span>
          </p>
          <input onChange={onGetData} type="email" name="email" id="username" placeholder="Enter Email or Username" />
          <input onChange={onGetData} type="password" name="" id="password" placeholder="password" />
          <div className={styles.securityCode}>
            <input onChange={onGetData} type="text" name="" id="sCode" placeholder="security code" />
            <div className={styles.code}>
              <span>{stringCode[0]}</span>
              <span>{stringCode[1]}</span>
              <span>{stringCode[2]}</span>
              <span>{stringCode[3]}</span>
            </div>
          </div>
          <div className={styles.rememberpass}>
            <div>
              <span>
                <input onChange={onGetData} type="checkbox" id="remember" />
              </span>
              <span> Remember me</span>
            </div>
            <div>
              <span onClick={onGoToForgot}>Forgot Password</span>
            </div>
          </div>
          <button onClick={onLoginUser}> Log In</button>
        </div>
      </div>
    </>
  );
};
export default LoginComp;
