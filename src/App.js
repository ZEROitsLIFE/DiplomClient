import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/HEADER/Header";
import HomePage from "./page/HomePage/HomePage";
import AboutPage from "./page/AboutPage/AboutPage";
import Footer from "./components/FOOTER/Footer";
import AuthPage from "./page/AuthPage/AuthPage";
import { fetchType } from "./store/typeSlice";
import { useDispatch,useSelector } from "react-redux";
import { fetchService } from "./store/serviceSlice";
import { checkAuth, getUserInfo } from "./http/userApi";
import { changeLogin, changeUser } from "./store/userSlice";
import Contact from "./components/CONTACT/Contact";
import Profile from "./page/MyProfilePage/Profile/Profile";
import { changeUserInfo } from "./store/userInfoSlice";
import Setings from "./page/MyProfilePage/Seatings/Setings";

import Service from "./page/ServicePage/ServicePage";
import AdminProfile from "./page/MyProfilePage/Admin/AdminProfile/Profile";
import Product from "./page/MyProfilePage/Admin/createProduct/CreateProguct";
import { fetchHistory } from "./store/historySlice";
import History from "./page/MyProfilePage/Admin/History/History";
import { Protected, ProtectedAdmin } from "./ProtestedRoute";
import Page404 from "./page/page404/page404";
import HistoryUserBasket from "./page/MyProfilePage/HistoruUser/HistoryUserBasket";
import PayForm from "./components/pay/payNew/PayForm";
import RegistrationPage from "./page/RegistrationPage/RegistrationPage";
import HistoryUserBasketForm from "./page/MyProfilePage/HistoruUser/HistoryUserBasketForms";
import { getBasketByUserId, getUserById } from "./http/serviceApi";
import { addBasket, fetchBasket } from "./store/BasketSlice";

// const user = useSelector(state=>state.user.isLogin)
function App(props) {
  console.log("APP INIT");

  const [isLogin, setLogin] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchType());
    dispatch(fetchService());
    dispatch(fetchHistory());

    console.log("HISTORU APP->");
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const fetchData = async () => {
        const data = await checkAuth();
        dispatch(changeUser(data));
        if (data.id) {
          dispatch(changeLogin(true));
          const response = await getUserInfo(data.id);
          dispatch(changeUserInfo(response));
          console.log(data)
          const basket = await getBasketByUserId(data.id)
          console.log("BASKET=>",basket)
          dispatch(addBasket(basket))
        }
      };


      fetchData();
    }

  });

  // const user = useSelector(state=>state.user)
  return (
    <div className="app">
      <Header />
      <div className="wrapper_app">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/registr" element={<RegistrationPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay" element={<PayForm />} />

          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />

          <Route
            path="/userhistory"
            element={
              <Protected>
                <HistoryUserBasketForm />
              </Protected>
            }
          />
          <Route
            path="/setings"
            element={
              <Protected>
                <Setings />
              </Protected>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminProfile />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectedAdmin>
                <History />
              </ProtectedAdmin>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedAdmin>
                <Product />
              </ProtectedAdmin>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
