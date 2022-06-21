import { $host, $authHost } from "./index";

export const getTypeServer = async () => {
  try {
    const data = await $host.get("type/findAll");
    console.log(data);
    return data.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getServiceServer = async () => {
  try {
    const data = await $host.get("type/findAll");
    console.log(data);
    return data.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getHistory = async () => {
  try {
    const reponse = await $host.get("history/findAll");
    console.log("qqq", reponse);
    return reponse;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const createType = async (name) => {
  try {
    const reponse = await $authHost.post("type/create", { name: name });
    // console.log("qqq",reponse)
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const createService = async (type, name, description, price) => {
  try {
    const reponse = await $authHost.post("service/create", {
      type,
      name,
      description,
      price,
    });
    console.log("Rersponce", reponse);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getUserById = async (id) => {
  try {
    console.log("UserToSearch", id);
    const reponse = await $authHost.post("basket/findUser", { id });
    console.log("Rersponce", reponse.data);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const createHistory = async (service, date, time) => {
  try {
    const reponse = await $authHost.post("history/create", {
      service,
      date,
      time,
    });
    console.log("Rersponce", reponse.data);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const historyReserved = async (id, user_id, basket_id) => {
  try {
    console.log(":::", user_id);
    console.log("B:::", basket_id);
    const reponse = await $authHost.post("history/reservednow", {
      id,
      user_id,
      basket_id,
    });
    console.log("Rersponce", reponse.data);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const historyComplited = async (id) => {
  try {
    const reponse = await $authHost.post("history/complitednow", {
      id,
    });
    console.log("Rersponce", reponse.data);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const historyFindByDate = async (date) => {
  try {
    const reponse = await $authHost.post("history/findByDate", {
      date,
    });
    console.log("Rersponce", reponse.data);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const findHistoryByService = async (serviceId) => {
  try {
    const reponse = await $authHost.post("history/findByService", {
      serviceId,
    });
    console.log("Rersponce", reponse.data);
    return reponse.data;
    console.log("Responce=>", reponse.data);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getBasketByUserId = async (userId) => {
  try {
    const reponse = await $authHost.post("basket/findBasketbyid", {
      userId,
    });
    console.log("Rersponce", reponse.data);
    return reponse.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
