import React from "react";
import ChangeUser from "./changeUserInfo/ChangeUserInfoForm";
import ChangePasssowrd from "./changePassword/changePassword";
import "./style.css";
import { NavLink } from "react-router-dom";

const Setings = () => {
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
                <NavLink to={"/userhistory"}>
                  {" "}
                  <div
                    class="nav-link "
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Історія
                  </div>
                </NavLink>
              </li>

              <li class="nav-item ">
                <div
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Setings
                </div>
              </li>
            </ul>

            <ChangeUser />

            <hr clas="my-4" />

            {/* <ChangePasssowrd/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setings;
