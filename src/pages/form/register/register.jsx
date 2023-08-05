import React, { useState, useEffect } from "react";
import { Warring, Education } from "../../../icons/icons";
import { Link } from "react-router-dom";
import Container from "./../../../components/container/container";
import Homecheck from "../../Home/homecheck/homecheck";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../login/login.scss";

const Register = () => {
  const navigate=useNavigate()
  const URL =
    "https://64b6b61adf0839c97e160576.mockapi.io/form/api/Form";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    const objs = { email, password,};
    console.log(objs);
    axios
      .post(URL, objs)
      .then(() => {
        toast.success("Xabaringiz jo'natildi 🫡");
        navigate("/login")
      })
      .catch((err) => {
        toast.error("Xabaringiz jo'natilmadi :🤔" + err.message);
      });
  };
  useEffect(() => {
    axios
      .post(URL)
      .then((response) => {})
      .catch((error) => toast.error("Internetingizni tekshrib ko'ring"));
  }, []);
  return (
    <React.Fragment>
      <section className="login register">
        <Container>
          <form >
            <div className="login__container">
              <div className="login__container-logo">
                <Link to={"/"} className="login__logo-link">
                  <Education />
                  Education
                </Link>
              </div>
              <div className="login__row">
                <form className="login__form" onSubmit={Submit}>
                  <h2 className="login__form-title">Регистрация</h2>
                  <div className="login__form-top">
                    <div className="login__form-inp">
                      <label htmlFor="email" className="login__form-label">
                        Електронная почта
                      </label>
                      <div className="login__form-login">
                        <input
                          type="email"
                          id="
                          email"
                          value={email}
                          className="login__form-email"
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="login__form-inp">
                      <label htmlFor="secure" className="login__form-label">
                        Пароль
                      </label>
                      <div className="login__form-secure">
                        <input
                          type="password"
                          id="secure"
                          value={password}
                          className="login__form-password login__form-email"
                          onChange={e=> setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="login__form-remember">
                        <Homecheck>Записать в телеграмм</Homecheck>
                      </div>
                    </div>
                  </div>
                  <div className="login__form-bottom">
                    <div className="login__form-button">
                      <button className="login__form-btn">
                        Регистрация
                      </button>
                    </div>
                    <div className="login__form-register">
                      <Link to={"/login"} className="login__form-r1">
                        Есть аккаунта?
                      </Link>
                      <Link to={"/login"} className="login__form-r2">
                        Войти
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Register;
