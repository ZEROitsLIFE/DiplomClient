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
                  <th scope="col">#</th>
                  <th scope="col">Тип</th>
                  <th scope="col">Послуга</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Час</th>
                  <th scope="col">Виконано</th>
                </tbody>
              </table>
              <button onClick={()=>props.onClick()}>dddd</button>
            </div>
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryUserBasket;
