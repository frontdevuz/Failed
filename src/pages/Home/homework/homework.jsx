import React from "react";
import search__icon from "../../../assets/images/svg/education__search.svg";
import done__icon from "../../../assets/images/svg/done__icon.svg";
import edit__icon from "../../../assets/images/svg/education__edit.svg";
import card__icon from "../../../assets/images/svg/education__card.svg";
import mail__icon from "../../../assets/images/svg/education__mail.svg";
import line from "../../../assets/images/svg/education__line.svg";
import Container from "../../../components/container/container";
import Hometitle from "../../../components/hometitle/hometitle";
import "./homework.scss";
const Homework = () => {
  return (
    <React.Fragment>
      <section className="work">
        <Container>
          <Hometitle>Как мы работаем</Hometitle>
          <div className="work__container">
            <div className="work__container-1">
              <div className="work__container-card">
                <div className="work__card-top">
                  <img src={search__icon} alt="This is a search icon" />
                </div>
                <div className="work__card-bottom">
                  <p className="work__bottom-text">
                    Ищите программу и университет
                  </p>
                </div>
              </div>
              <div className="work__line">
                <img src={line} alt="This is a line img" />
              </div>
              <div className="work__container-card">
                <div className="work__card-top">
                  <img src={done__icon} alt="This is a done icon" />
                </div>
                <div className="work__card-bottom">
                  <p className="work__bottom-text work__active">
                    Регистрируетесь на нашем сайте
                  </p>
                </div>
              </div>
              <div className="work__line">
                <img src={line} alt="This is a line img" />
              </div>
              <div className="work__container-card">
                <div className="work__card-top">
                  <img src={edit__icon} alt="This is a edit icon" />
                </div>

                        
                <div className="work__card-bottom">
                  <p className="work__bottom-text">
                    Заполняете анкету и подаете документы
                  </p>
                </div>
              </div>
            </div>
            <div className="work__container-2">
              <img src={line} alt="This is a line img" className="work__container-line2" />
            </div>
            <div className="work__container-1">
              <div className="work__container-card">
                <div className="work__card-top"></div>
                <div className="work__card-bottom">
                  <p className="work__bottom-text">
                    Получаете ответ от Университета
                  </p>
                </div>
              </div>
              <div className="work__line">
                <img src={line} alt="This is a line img" className="work__line-img" />
              </div>
              <div className="work__container-card">
                <div className="work__card-top work__active">
                  <img src={mail__icon} alt="This is a mail icon" />
                </div>
                <div className="work__card-bottom">
                  <p className="work__bottom-text">
                    Мы отправляем ваши документы в Универ
                  </p>
                </div>
              </div>
              <div className="work__line">
                <img src={line} alt="This is a line img" className="work__line-img"/>
              </div>
              <div className="work__container-card">
                <div className="work__card-top">
                  <img src={card__icon} alt="This is a mail icon" />
                </div>
                <div className="work__card-bottom">
                  <p className="work__bottom-text">
                    Оплачиваете за услуги нашей компании
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homework;
