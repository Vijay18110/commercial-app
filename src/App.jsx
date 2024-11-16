import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Public from "./routes/Public";
import Home from "./pages/Home";
import MyProfile from "./pages";
import BlogCatGrid from "./components/BlogCategoryGrid";
import SinglePostRight from "./components/SinglePostRight/Index";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpass from "./pages/Forgotpassword";
import ResetPass from "./pages/Resetpass";
import PageNoTFound from "./pages/Resetpass";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";
import Invoice from "./pages/Invoice";
import About from "./pages/About";
import PageNOT from "./pages/PageNotFonud";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./Store/auth";
import Loader from "./Loader/loader";
import SingleProducts from "./pages/SinglePageProduct";

function App() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("login"));
  const isStateChange = useSelector((state) => state.auth.isStateChange);
  const getData = async () => {
    const res = await fetch("https://ecommerce-web-69896-default-rtdb.firebaseio.com/users.json");
    let data = await res.json();

    let newArr = [];
    for (const d in data) {
      newArr.push(data[d]);
    }
    dispatch(authAction.onGetAllUser(newArr));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    dispatch(authAction.onAddToken(token));
  }, [isStateChange]);
  return (
    <Routes>
      <Route path="/myprofile" element={<Public element={<MyProfile />} />} />
      <Route path="/about" element={<Public element={<About />} />} />
      <Route path="/BlogCategoryGrid" element={<Public element={<BlogCatGrid />} />} />
      <Route path="/SinglePostRight" element={<Public element={<SinglePostRight />} />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Public element={<Home />} />} />
      <Route path="/contact" element={<Public element={<Contact></Contact>} />} />
      <Route path="/singleProduct" element={<Public element={<SingleProducts></SingleProducts>} />} />
      {/* <Route path="/register" element={<Public element={<Register></Register>} />} /> */}
      <Route path="/forgotpass" element={<Public element={<Forgotpass></Forgotpass>} />} />
      <Route path="/resetpass" element={<Public element={<ResetPass></ResetPass>} />} />
      <Route path="*" element={<Public element={<PageNOT></PageNOT>} />} />
      <Route path="/privacy" element={<Public element={<PrivacyPolicy />} />} />
      <Route path="/TemsAndCondition" element={<Public element={<TermsAndConditions />} />} />
      <Route path="/invoice" element={<Public element={<Invoice />} />} />
    </Routes>
  );
}
export default App;
