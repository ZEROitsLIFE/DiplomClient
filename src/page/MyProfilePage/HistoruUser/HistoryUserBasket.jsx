import React from "react";
import { NavLink } from "react-router-dom";

const HistoryUserBasket = (props) => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Settings</h2>
          <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li class="nav-item">
                <NavLink to={"/profile"}>
                  <div
                    class="nav-link"
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
                <div
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Історія
                </div>
              </li>

              <li class="nav-item">
                <NavLink to={"/setings"}>
                  {" "}
                  <div
                    class="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Setings
                  </div>
                </NavLink>
              </li>
            </ul>
            <div class="row mt-5 align-items-center">
              <button onClick={() => props.onClick()}>Обновити список</button>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Послуга</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Час</th>
                    <th scope="col">Виконано</th>
                  </tr>
                </thead>
                <tbody>
                  {props.userHistoru ? (
                    props.userHistoru.map((data) => {
                      const serv = props.service.value.find(serv=>serv._id === data.service)
                      const a = props.type.value.find(type=>type._id === serv.type)
                      return (
                        <tr>
                          <th scope="col">1</th>
                          <th scope="col">{a.name}</th>
                          <th scope="col">{serv.name}</th>
                          <th scope="col">{data.date.split("T")[0]}</th>
                          <th scope="col">{data.time}</th>
                          <th scope="col">{data.complited ? "+" : "-"}</th>
                        </tr>
                      );
                    })
                  ) : (
                    <p>Нічого не додано</p>
                  )}
                </tbody>
              </table>
            </div>
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryUserBasket;
