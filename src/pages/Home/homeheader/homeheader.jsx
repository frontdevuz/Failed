import "./homeheader.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "antd";
import Container from "../../../components/container/container";
import Homenavbar from "../../Home/homenavbar/homenavbar";
const Homeheader = (props) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => { 
    const onScroll = () => {
      setScroll(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(scroll);
  return (
      <React.Fragment>
      <Container>
        <div
          className={
              scroll > 70
              ? "header__nav-container header__nav-scrolled"
              : "header__nav-container"
            }
            >
            <Homenavbar/>
        </div>
      </Container>
      <header className="header">
        <Container>
          <div className="header__hero">
            <div className="header__hero-container">
              <h1 className="header__title">
                Выберите свой университет вместе с Education
              </h1>
              <p className="header__description">
                Education помогает абитуриентам найти свое направление в выборе
                профессии и поступить в престижные ВУЗы на территории СНГ
              </p>
              <div className="header__hero-select">
                <ul className="header__select-list">
                  <li>Бакалаврият</li>
                  <li>Аспирантура</li>
                </ul>
                <ul className="header__select-list">
                  <li>Магистратура</li>
                  <li>Докторантура</li>
                </ul>
              </div>
              <Button type="primary" className="header__btn">Бесплатная косультация</Button>
            </div>
          </div>
        </Container>
        {props.children}
      </header>
    </React.Fragment>
  );
};
export default Homeheader;
