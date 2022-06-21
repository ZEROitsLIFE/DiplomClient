import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import foto from "../../static/OIP.png";
import { fetchService } from "../../store/serviceSlice";
import { NavLink } from "react-router-dom";
import Modal from "../ModalForm/Modal";



const Service = () => {
  const dispartch = useDispatch();

  // useEffect(() => {
  //   dispartch(fetchService());
  // }, []);
  //Звязати з зміною

  const type = useSelector((state) => state.type);
  const service = useSelector((state) => state.service);
  const user = useSelector((state) => state.user);


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="main_header">Ми пропонуємо такі послуги</div>
      {type.value.map((data) => {
        return (
          <div>
            <div className="Herd">
              <h2>{data.name}</h2>
            </div>
            <div className="Conteiner_Service">
              {service.value.map((datas) => {
                if (data._id === datas.type) {
                  return (
                    <div class="card">
                      <div class="info">
                        <h1 class="title">{datas.name}</h1>
                        <p class="description">{datas.description}</p>

                        {!user.isLogin ? (
                          <NavLink to="/login">
                            <button class="button-54">Ввійти</button>
                          </NavLink>
                        ) : (
                          <NavLink to="/pay">
                          <button class="button-54" onClick={()=>setIsOpen(true)}>Замовити</button>
                          </NavLink>
                        )}
                        {isOpen && <Modal setIsOpen={setIsOpen} />}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Service;

// () => {
//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(), 30), 16)
//   );
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       showTimeSelect
//       excludeTimes={[
//         setHours(setMinutes(new Date(), 0), 17),
//         setHours(setMinutes(new Date(), 30), 18),
//         setHours(setMinutes(new Date(), 30), 19),
//         setHours(setMinutes(new Date(), 30), 17),
//       ]}
//       dateFormat="MMMM d, yyyy h:mm aa"
//     />
//   );
// };
