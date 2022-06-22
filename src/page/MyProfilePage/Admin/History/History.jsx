import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getUserById,
  getUsers,
  historyComplited,
} from "../../../../http/serviceApi";
import { changeHistoryComplited } from "../../../../store/historySlice";
import { addUsers, fetchUsers } from "../../../../store/usersSlice";

// const useBeforeRender = (callback, deps) => {

const History = () => {
  const dispatch = useDispatch();


  const type = useSelector((state) => state.type);
  const history = useSelector((state) => state.history);
  const service = useSelector((state) => state.service);
  const userss = useSelector((state) => state.users);
  console.log("HISTORY_IS_FETCH->", history.isFetch);
  console.log("Service_IS_FETCH->", service.isFetch);
  console.log("Type_IS_FETCH->", type.isFetch);

  // НЕ вткористовувати авайт
  const find = async (id) => {
    const responses = await getUserById(id);
    return responses;
    console.log("RESPONSE USER=>", responses);
  };

  const onClick = async (id) => {
    const data = await historyComplited(id);
    console.log("Data=", data);
    dispatch(changeHistoryComplited(data));
    console.log("Click", id);

    // console.log(history.value.sort((a,b)=>{return a.date-b.date}));//////////////////////////////////////////////////////////////////////////////////////////////////////////
  };

  // console.log("Users",users);
  let i = 0;
  if (userss.isFetch ===true) {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Settings</h2>
          <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li class="nav-item">
                <NavLink to={"/admin"}>
                  <div
                    class="nav-link "
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Profile
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to={"/history"}>
                  <div
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Show list
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to={"/product"}>
                  <div
                    class="nav-link "
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Product
                  </div>
                </NavLink>
              </li>
            </ul>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Тип</th>
                  <th scope="col">Послуга</th>
                  <th scope="col">Зарезервовано</th>
                  <th scope="col">Клієнт</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Час</th>
                  <th scope="col">Виконано</th>
                </tr>
              </thead>
              <tbody>
                {history.value.map((data) => {
                  console.log("History=>", data);
                  // console.log(
                  //   `Service=>${data._id}`,
                  //   service.find((datas) => datas._id === data.service)
                  // );

                  const serviseData = service.value.find(
                    (datas) => datas._id === data.service
                  );

                  const typeData = type.value.find(
                    (datas) => datas._id === serviseData.type
                  );
                  console.log("T=>", typeData);

                  console.log("UUUSSSEERRRSSS", userss.value)
                  const usersInfo = userss.value.find(u => u.baskt === data.basket)
                  console.log("object", usersInfo);

                  // const user = find(data.basket);
                  // console.log("USER=>", user);
                  i++;
                  return (
                    <tr key={data.name}>
                      <th scope="row">{i}</th>
                      <td>{typeData.name}</td>
                      <td>{serviseData.name}</td>
                      <td>{data.reserved ? "+" : "-"}</td>
                      <td>{usersInfo===undefined?<p></p>:`${usersInfo.name} ${usersInfo.number}`}</td>
                      <td>{data.date.split("T")[0]}</td>
                      <td>{data.time}</td>
                      <td>{data.complited ? "+" : "-"}</td>
                      <td>
                        {data.complited === false && data.reserved === true ? (
                          <button onClick={() => onClick(data._id)}>
                            Завершити
                          </button>
                        ) : (
                          <></>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
};

export default History;
