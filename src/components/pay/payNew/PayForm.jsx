import React, { useEffect } from "react";
import PayRedux from "./Pay";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { historyReserved } from "../../../http/serviceApi";
import {
  changeHistoryReserved,
} from "../../../store/historySlice";


const PayForm = () => {
  const dispatch = useDispatch();

  const service = useSelector((state) => state.service);
  const type = useSelector((state) => state.type);
  const history = useSelector((state) => state.history);
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);

  const [selectType, setSelectType] = useState();
  const [selectService, setSelectService] = useState();
  const [selectS, selectSs] = useState();

  console.log("service=", selectService);
  console.log("type=", selectType);

  const typeOption = type.value.map((data) => {
    return { value: data._id, label: data.name };
  });

  const serviceArr = service.value.filter(
    (service) => service.type === selectType
  );

  const serviceStop = service.value.find(
    (service) => service._id === selectService
  );
  const typeStop = type.value.find((type) => type._id === selectType);

  console.log("serviceArr", serviceArr);

  const serviceOption = serviceArr.map((data) => {
    return { value: data._id, label: data.name };
  });

  console.log("serviceOption", serviceOption);

  const onSubmit = () => {
    const h = history.value.filter((hist) => selectService === hist.service);

    h.length === 0 ? selectSs(null) : selectSs(h);
    console.log("ss", h);
  };

  const onSelectType = (data) => {
    setSelectType(data);
  };

  const onSelectService = (data) => {
    if (data === null) {
      alert("Послугу не вказано");
    } else {
      setSelectService(data);
    }
  };

  const onClick = async (id) => {
    console.log("SelecS", user.id);
    console.log("SelecB", basket.id);
    const response = await historyReserved(id, user.id, basket.id);
    console.log("Res+s=", response);
    dispatch(changeHistoryReserved(response));
  };

  console.log("USER=", user);
  return (
    <PayRedux
      onSelectType={onSelectType}
      onSelectService={onSelectService}
      typeOption={typeOption}
      onSubmit={onSubmit}
      serviceOption={serviceOption}
      historyStore={selectS}
      service={serviceStop}
      type={typeStop}
      Reserved={onClick}
      User={user}
    />
  );
};

export default PayForm;
