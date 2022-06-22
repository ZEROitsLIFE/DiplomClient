import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchService } from "../../../store/serviceSlice";
import HistoryUserBasket from "./HistoryUserBasket";

const HistoryUserBasketForm = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchService());
  // });

  const type = useSelector((state) => state.type);
  const history = useSelector((state) => state.history);
  const service = useSelector((state) => state.service);
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);

  const [HistoryUserBasketState, setHistoryUserBasketState] = useState();

  const onClick = async () => {
    const HistUser = history.value.filter((hist) => hist.basket === basket.id);
    console.log(HistUser);
    setHistoryUserBasketState(HistUser);
  };

  return (
    <HistoryUserBasket
      onClick={onClick}
      userHistoru={HistoryUserBasketState}
      service={service}
      type={type}
    />
  );
};

export default HistoryUserBasketForm;
