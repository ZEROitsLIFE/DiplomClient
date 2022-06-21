import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo } from "../../../../http/userApi";
import ChangeUserInfoReduxForm from "./changeUserInfo";

const Refister = (props) => {
  const user_id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
    const Temp = await chengeUserInfo(
      user_id,
      formData.inputPhone,
      formData.firstname
    );
    dispatch(changeUserInfo(Temp))
  };

  const chengeUserInfo = async (user_id, number, name) => {
    const data = await changeUserInfo(user_id, number, name);
    console.log(data);
  };
  return (
    <div className="container">
      <ChangeUserInfoReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Refister;
