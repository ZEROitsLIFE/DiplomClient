import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HistoryUserBasket from "./HistoryUserBasket";

const HistoryUserBasketForm = () => {
  const dispatch = useDispatch();

  const type = useSelector((state) => state.type);
  const history = useSelector((state) => state.history);
  const service = useSelector((state) => state.service);
  const user = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket);

const [HistoryUserBasketState, setHistoryUserBasketState] = useState()

  const onClick = async () => {
    const HistUser = history.value.filter(hist => hist.basket_id === basket.id );
    console.log(HistUser)
    setHistoryUserBasketState(HistUser)
  };

  return <HistoryUserBasket onClick={onClick} userHistoru={HistoryUserBasketState} service={service} type={type} />;
};

export default HistoryUserBasketForm;
