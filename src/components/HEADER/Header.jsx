import React from "react";
import "./Header.css";
import logo from "../../static/icon/logo.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@popperjs/core";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLogin, changeUser } from "../../store/userSlice";
import { NavLink } from "react-router";
import { logoutAPI } from "../../http/userApi";
import { changeUserInfo } from "../../store/userInfoSlice";
import { Navigate } from "react-router";
import {removeBasket} from '../../store/BasketSlice'


const Header = (props) => {
  const userState = useSelector((state) => state.user.isLogin);
  const userRole = useSelector((state) => state.user.role);
  console.log("userState->", userState);

  const dispatch = useDispatch();

  const oN = () => {
    dispatch(changeLogin(true));
  };

  const Logout = async () => {
    logoutAPI();
    dispatch(changeUser());
    // dispatch(changeLogin(false));
    dispatch(changeUserInfo());
    dispatch(removeBasket())
    Navigate('/')
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="Navogation " variant="dark" >
      <Container>
        <img src={logo} width="50" height="50" className="navlogo" alt="" />

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="TogleButton"
        />
        <Navbar.Collapse id="responsive-navbar-nav show">
          <Nav className="me-auto" activeKey={window.location.pathname}>
            <Nav.Link as={Link} to="/">
              <p className="button-88">Головна</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/service">
              <p className="button-88 ">Послуги</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="item-to-left">
              <p className="button-88">Про нас</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <p className="button-88">Контакти</p>
            </Nav.Link>
            {/* <NavDropdown title="" className="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Request a Call Back
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {userState ? (
            userRole === "ADMIN" ? (
              <Nav variant="pills">
                <Nav.Link as={Link} to="/">
                  <span className="spanProfile">
                    <Nav.Link as={Link} to="/admin">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="mdo"
                        width="32"
                        height="32"
                        class="rounded-circle"
                      />
                    </Nav.Link>
                  </span>
                </Nav.Link>
                <NavDropdown title="" className="collapsible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/" onClick={Logout}>
                    <p className="text-color">Вийти</p>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav variant="pills">
                <Nav.Link as={Link} to="/">
                  <span className="spanProfile">
                    <Nav.Link as={Link} to="/profile">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="mdo"
                        width="32"
                        height="32"
                        class="rounded-circle"
                      />
                    </Nav.Link>
                  </span>
                </Nav.Link>
                <NavDropdown title="" className="collapsible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/" onClick={Logout}>
                    <p className="text-color">Вийти</p>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">
                <p className="text-color button-34">Ввійти</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/registr">
                <p className="button-33">Реєстрація</p>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
