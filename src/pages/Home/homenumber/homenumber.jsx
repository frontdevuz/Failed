import React from "react";
import Container from "../../../components/container/container";
import Hometitle from "../../../components/hometitle/hometitle";
import { Link } from "react-router-dom";
import "./homenumber.scss";
import Homecheck from "../homecheck/homecheck";
const Homenumber = () => {
  return (
    <React.Fragment>
      <Container className={"number__c"}>
        <Hometitle>Получите бесплатную консультацию</Hometitle>
      </Container>
      <section className="number">
        <Container>
          <div className="number__container">
            <div className="number__form">
              <p className="number__title">
                Оставьте ваш телефон номер и мы свяжемся с вами
              </p>
              <div className="number__input">
                <div className="number__i">
                  <input
                    type="search"
                    className="number__inp"
                    placeholder="+998 9x xxx xx xx"
                  />
                </div>
                <div className="number__ch">
                  <Homecheck>
                    Записать в телеграмм
                  </Homecheck>
                </div>
                <div className="number__btn">
                  <Link to={"/"} className="number__button">
                    Заказать бесплатную консультацию
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homenumber;
