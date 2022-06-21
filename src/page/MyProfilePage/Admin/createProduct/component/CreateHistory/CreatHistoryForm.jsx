import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { change, FormName } from "redux-form";
import {
  createHistory,
  createService,
} from "../../../../../../http/serviceApi";
import { addHistory, fetchHistory } from "../../../../../../store/historySlice";
import { addService } from "../../../../../../store/serviceSlice";
import CreateHistoryReduxForm from "./createHistory";
import CreateServieReduxForm from "./createHistory";

const CreateHistoryForm = () => {
  const dispatch = useDispatch();

  const histor = useSelector((state) => state.history);
  const service = useSelector((state) => state.service);
  const type = useSelector((state) => state.type);
  console.log("HISTORY->", histor);
  console.log("Service->", service);
  console.log("Type->", type);

  const onSubmit = async (formData) => {
    console.log("1");
    console.log("formDataNULL->", formData.date_till);
    const DateData = new Date(formData.date_till).toJSON().slice(0, 10);
    console.log("2");
    console.log("DateData->", DateData);

    const s = Date.now();
    console.log("3");
    const d = new Date(s);
    console.log("4");

    const dd = d.toJSON().slice(0, 10);
    console.log("5");

    const date1 = dd.split("-")[2];
    console.log("6");
    const date2 = DateData.split("-")[2];
    console.log("7");

    const date3 = parseInt(date1);
    console.log("8");
    const date4 = parseInt(date2) + 1;
    console.log("9");

    console.log("SERVICES_-_-_->", formData.type);
    console.log("Time", formData.time);

    if (date4 <= date3) {
      alert("Дата запізня чи не задана");
    } else if (!formData.type) {
      alert("Тип задано");
    } else if (!formData.time) {
      alert("Час не задано");
    } else {
      console.log("10");
      const response = await createHistory(
        formData.type,
        DateData,
        formData.time
      );

      console.log("11");
      console.log("RESPONCE", response);
      if (response !== undefined) {
        dispatch(addHistory(response));
        alert("Історію додано");
      }
    }
  };

  const services = service.value.map((data) => {
    const types = type.value.find((datas) => datas._id === data.type);
    console.log("first", types);
    return { value: data._id, label: `${types.name}:  ${data.name}` };
  });

  return (
    <div>
      <CreateHistoryReduxForm Options={services} onSubmit={onSubmit} />
    </div>
  );
};
export default CreateHistoryForm;
