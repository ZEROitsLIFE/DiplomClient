import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import CreateTypeReduxForm from "./component/createType/createType";
import CreateTypeForm from "./component/createType/CreateTypeForm";
import CreateServie from "./component/createService/createServie";
import CreateServiceForm from "./component/createService/CreateServiceForm";
import CreateHistoryForm from "./component/CreateHistory/CreatHistoryForm";

const Profuct = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 className="h3 mb-4 page-title">Settings</h2>
          <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item">
                <NavLink to={"/admin"}>
                  <div
                    className="nav-link "
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
              <li className="nav-item">
                <NavLink to={"/history"}>
                  <div
                    className="nav-link "
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
              <li className="nav-item">
                <NavLink to={"/product"}>
                  <div
                    className="nav-link active"
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
            <CreateTypeForm />
            <hr className="my-4" />
            <CreateServiceForm />
            <hr className="my-4" />
            <CreateHistoryForm />
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profuct;
