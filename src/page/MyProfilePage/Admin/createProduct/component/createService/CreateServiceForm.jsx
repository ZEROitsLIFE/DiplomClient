import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormName } from "redux-form";
import { createService } from "../../../../../../http/serviceApi";
import { addService } from "../../../../../../store/serviceSlice";
import CreateServieReduxForm from "./createServie";

const CreateServiceForm = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.type.value);
  // console.log("object->",type);

  const Options = () => {
    let result = type.map((data) => {
      return { value: data._id, label: data.name };
    });
    // console.log("Options->",result);
    return result;
  };

  const OnSubmit = async (formData) => {
    if (!formData.type) alert("Тип не визначено");
    else if (!formData.name) alert("Не задано назву Послуги");
    else if (!formData.description) alert("На дано опис");
    else if (!formData.price) alert("На задано ціну");
    else {
      console.log("FormData=>", formData);
      const data = await createService(
        formData.type,
        formData.name,
        formData.description,
        formData.price
      );
      console.log("object", data);
      if(data !== undefined){
        dispatch(addService(data));
      }
      
    }
  };

  return (
    <div>
      <CreateServieReduxForm Options={Options()} onSubmit={OnSubmit} />
    </div>
  );
};

export default CreateServiceForm;
