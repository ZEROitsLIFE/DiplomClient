import React from "react";
import { useDispatch } from "react-redux";
import { createType } from "../../../../../../http/serviceApi";
import { addType } from "../../../../../../store/typeSlice";
import CreateTypeReduxForm from "./createType";

const CreateTypeForm = () => {
  const dispatch = useDispatch();

  

  const onSubmitt = async (formData) => {
    console.log(formData);
    if (!formData.name) {
      alert("Тип пустий");
    } else {
      const data = await createType(formData.name);
      console.log("a=", data);
      if (data !== undefined) {
        dispatch(addType(data));
        alert("Тип створено")
      }
    }
  };

  return (
    <CreateTypeReduxForm
      onSubmit={onSubmitt}
    />
  );
};

export default CreateTypeForm;
