import { $host, $authHost } from "./index";
import { useDispatch } from "react-redux";

export const registrationAPI = async (
  email,
  password,
  first_name,
  phoneNumber,
) => {
  try {
    const data = await $host.post("user/registration", {
      email,
      password,
      first_name,
      phoneNumber
    });
    console.log(data.status);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const loginAPI = async (email, password) => {
  try {
    const response = await $host.post("user/login", { email, password });
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};

export const logoutAPI = async () => {
  try {
    const response = await $authHost.post("user/logout");
    localStorage.removeItem("token", response.data.accessToken);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};

export const checkAuth = async () => {
  try {
    const response = await $authHost.get(`user/refresh`, {withCredentials: true});
    localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const getUserInfo = async (userId) =>{
    try {
      const response = await $host.post('user/user-info', {userId});
      return response.data
    } catch (error) {
      return error.response.data.message
    }
  };

  export const chekUserPhone = async (number) =>{
    try {
      const response = await $host.post('userinfo/getPhone', {Number: number});
      return response.data
    } catch (error) {
      return error.response.data.message
    }
  };
  
  export const changeUserInfoApi = async (user_id, number,name) =>{
    try {
      const response = await $authHost.post('userinfo/changeUserInfo', {user_id, number, name});
      console.log("responce=",response)
      return response.data
    } catch (error) {
      return error.response.data.message
    }
  };