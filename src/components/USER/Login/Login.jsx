import React, { useState } from "react";
import { getUserInfo, loginAPI } from "../../../http/userApi";
import LoginReduxForm from "./LoginForm/Login";
import { useDispatch, useSelector } from "react-redux";
import { changeLogin, changeUser } from "../../../store/userSlice";
import { changeUserInfo } from "../../../store/userInfoSlice";
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../../store/BasketSlice";
import { getBasketByUserId } from "../../../http/serviceApi";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalActive, setModalActive] = useState(true);

  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user);

  const onSubmit = (formData) => {
    login(formData.email, formData.password);
    console.log(formData);
    feychBasket();
  };
  ////Відокремити з файлу
  const login = async (email, password) => {
    try {
      let dataUser = await loginAPI(email, password);
      console.log(dataUser);
      const response = await getUserInfo(dataUser.id);
      console.log(response);
      const basket = await getBasketByUserId(dataUser.id);
      
      console.log(response);
      if (dataUser) {
        dispatch(changeUser(dataUser));
        dispatch(changeUserInfo(response));
        dispatch(changeLogin(true));
        dispatch(addBasket(basket))
      }
      navigate("/");

      console.log("USER=", user);
    } catch (error) {
      console.log(error.status);
    }
  };

  const feychBasket = async () => {
    console.log("USER=", user);
  };

  return (
    <div className="container">
      {!isLogin ? (
        <LoginReduxForm onSubmit={onSubmit} />
      ) : (
        <div>
          {" "}
          <p>Ви вже зарегестровані</p>
        </div>
      )}
    </div>
  );
};

export default Login;
