import React from "react";
import { Warring, Education } from "../../../icons/icons";
import { Link } from "react-router-dom";
import Container from "./../../../components/container/container";
import Homecheck from './../../Home/homecheck/homecheck';
import "./login.scss";
const Login = () => {


  return (
    <React.Fragment>
      <section className="login">
        <Container>
          <div className="login__container">
            <div className="login__container-logo">
              <Link to={"/"} className="login__logo-link">
                <Education />
                Education
              </Link>
            </div>
            <div className="login__row">
              <form action="post" className="login__form">
                <h2 className="login__form-title">Войти</h2>
                <div className="login__form-top">
                  <div className="login__form-inp">
                    <label htmlFor="login" className="login__form-label">
                      Логин
                    </label>
                    <div className="login__form-login">
                      <input
                        type="email"
                        id="login"
                        className="login__form-email"
                      />
                      <span className="login__form-warring">
                        <Warring />
                      </span>
                    </div>
                    <small className="login__form-small">
                      Неправильный логин
                    </small>
                  </div>
                  <div className="login__form-inp">
                    <label htmlFor="secure" className="login__form-label">
                      Пароль
                    </label>
                    <div className="login__form-secure">
                      <input
                        type="password"
                        id="secure"
                        className="login__form-password login__form-email"
                      />
                    </div>
                    <div className="login__form-remember">
                      <Homecheck>Записать в телеграмм</Homecheck>
                    </div>
                  </div>
                </div>
                <div className="login__form-bottom">
                  <div className="login__form-button">
                    <button className="login__form-btn" type="submit">
                      Войти
                    </button>
                  </div>
                  <div className="login__form-register">
                    <Link to={"/register"} className="login__form-r1">
                      Нет аккаунта?
                    </Link>
                    <Link to={"/register"} className="login__form-r2">
                      Регистрация
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Login;
