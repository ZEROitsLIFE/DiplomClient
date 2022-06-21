import React from "react";
import { chekUserPhone, registrationAPI } from "../../../http/userApi";
import { useDispatch } from "react-redux";
import RegistrationReduxForm from "./Redistartin";
import { useNavigate } from "react-router-dom";

const Refister = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  
  const onSubmit = async (formData) => {
    console.log(formData);
    console.log(formData.confirm_password);
    const chek = await chekPassword(formData.phoneNumber);
    console.log(chek);

    
      if (chek === true) {
        alert("Такий номер існує");
      } else if (formData.password === formData.confirm_password) {
        registration(
          formData.email,
          formData.password,
          formData.first_name,
          formData.phoneNumber
          // formData.imputSex
        );
        navigate("/");
      } else {
        alert("Паролі не спавпадають");
      }
    };


    ////Відокремити з файлу
    const registration = async (email, password, first_name, phoneNumber) => {
      try {
        await registrationAPI(email, password, first_name, phoneNumber);
      } catch (error) {
        console.log(error.status);
      }
    };

    const chekPassword = async (number) => {
      try {
        const chek = await chekUserPhone(number);
        return chek;
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="container">
        <RegistrationReduxForm onSubmit={onSubmit} />
      </div>
    );
  };

export default Refister;
