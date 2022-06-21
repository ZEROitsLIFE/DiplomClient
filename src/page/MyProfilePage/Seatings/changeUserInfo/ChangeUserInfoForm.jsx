import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  changeUserInfoApi } from "../../../../http/userApi";
import ChangeUserInfoReduxForm from "./changeUserInfo";
import {changeUserInfo} from '../../../../store/userInfoSlice'

const Refister = (props) => {
  const user_id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
   const Temp =  chengeUserInfoFunc(
      user_id,
      formData.inputPhone,
      formData.firstname
    );
   
  };

  const chengeUserInfoFunc = async (user_id, number, name) => {
   const data = await changeUserInfoApi(user_id, number, name);
    dispatch(changeUserInfo(data))
  };
  return (
    <div className="container">
      <ChangeUserInfoReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Refister;
