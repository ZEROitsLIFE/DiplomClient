import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import { useEffect } from "react";
import { fetchHistory } from "../../../store/historySlice";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistory());
  });

  const userInfoState = useSelector((state) => state.userInfo);
  const userState = useSelector((state) => state.user);

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Settings</h2>
          <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
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
                  Profile
                </div>
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
              {userState.isActivated === false ? (
                <p>
                  Ви не Активували акаунт. Ваша активність буде зменшена. Для
                  активації перейдіть в пошту.
                </p>
              ) : (
                <p></p>
              )}
              <div class="col-md-3 text-center mb-5">
                <div class="avatar avatar-xl">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="..."
                    class="avatar-img rounded-circle"
                  />
                </div>
              </div>
              <div class="col">
                <div class="row align-items-center">
                  <div class="col-md-7">
                    <h4 class="mb-1">{userInfoState.first_name}</h4>
                    <h4 class="mb-1">{userState.email}</h4>
                    {/* <p class="small mb-3">
                        <span class="badge badge-dark">New York, USA</span>
                      </p> */}
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-7">
                    <p class="text-muted">{userInfoState.about}</p>
                  </div>
                  <div class="col">
                    <p class="small mb-0 text-muted">
                      Стать:{userInfoState.sex}
                    </p>
                    {/* <p class="small mb-0 text-muted">
                        P.O. Box 464, 5975 Eget Avenue
                      </p> */}
                    <p class="small mb-0 text-muted">
                      {userInfoState.phone_number}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
