import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const AdminProfile = () => {
  const userInfoState = useSelector(state=>state.userInfo)
  const userRole = useSelector(state => state.user.role)

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 className="h3 mb-4 page-title">Settings</h2>
          <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item">
                <div
                  className="nav-link active"
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
              <li className="nav-item">
                <NavLink to={'/history'}>
                <div
                  className="nav-link"
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
                <NavLink to={'/product'}>
                <div
                  className="nav-link"
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
              <div className="row mt-5 align-items-center">
                <div className="col-md-3 text-center mb-5">
                  <div className="avatar avatar-xl">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="..."
                      className="avatar-img rounded-circle"

                    />
                  </div>
                </div>
                <div className="col">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h4 className="mb-1">{userInfoState.first_name}</h4>
                      {/* <p className="small mb-3">
                        <span className="badge badge-dark">New York, USA</span>
                      </p> */}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-7">
                      <p className="text-muted">
                        {userInfoState.about}
                      </p>
                    </div>
                    <div className="col">
                      <p className="small mb-0 text-muted">Стать:{userInfoState.sex}</p>
                      {/* <p className="small mb-0 text-muted">
                        P.O. Box 464, 5975 Eget Avenue
                      </p> */}
                      <p className="small mb-0 text-muted">{userInfoState.phone_number}</p>
                      <p className="small mb-0 text-muted">Role:{userRole}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
