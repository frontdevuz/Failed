import React from "react";
import Container from "../../../components/container/container";
import { Link } from "react-router-dom";
import Education__logo from "../../../assets/images/svg/Eduaction-logo.svg";
import "../homeheader/homeheader.scss"
const Homenavbar = () => {
  return (
    <React.Fragment>
      <Container>
        <div className={"header__navbar"}>
          <Link to={"/"} className="header__navbar-logo">
            <img src={Education__logo} alt="This is a education-logo img " />
            <h2 className="header__navbar-title">Education</h2>
          </Link>
          <ul className="header__form">
            <Link to={"/login"} className="header__form-login">
              Войти
            </Link>
            <Link to={"/register"} className="header__form-register">
              Регистрация
            </Link>
          </ul>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Homenavbar;
