import { type } from "@testing-library/user-event/dist/type";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { findHistoryByService, historyFindByDate } from "../../http/serviceApi";
import CreatePayReduxForm from "./Pay";

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

const PayForm = () => {
  const typeState = useSelector((state) => state.type);
  const serviceState = useSelector((state) => state.service);
  const [typeSelectId, setTypeSelectId] = useState("62ad92cd40d0713c807141db");
  const [serviceSelectId, setServiseSelectId] = useState();
  const [ServiceArr, setServiseArr] = useState();
  const [curentServiceArr, setcurentServiseArr] = useState();

  useEffect(() => {
    console.log("AAA",ServiceArr);
    setcurentServiseArr(ServiceArr)
  }, [ServiceArr]);

  const typeArr = typeState.value.map((type) => {
    return { value: type._id, label: type.name };
  });

  const typeChange = (typeId) => {
    if (typeId === null) {
      console.log(typeId);
    } else {
      console.log(serviceState.value);

      const service = serviceState.value.filter(
        (service) => service.type === typeId
      );
      console.log(service);
        setServiseArr(service)

      console.log("serviceArr=>", ServiceArr);
      console.log("CurentserviceArr=>", curentServiceArr);
    }
    
  };


  const serviceChange = async (serviceId) => {
    const response = await findHistoryByService();
  };
  
  return <CreatePayReduxForm typeOptions={typeArr} typeChange={typeChange} />;
};
export default PayForm;
