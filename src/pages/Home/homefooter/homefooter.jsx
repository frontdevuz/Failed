import React from "react";
import Container from "../../../components/container/container";
import { Link } from "react-router-dom";
import "./homefooter.scss";
import { Instagram, Facebook, Telegram } from "./../../../icons/icons";
const Homefooter = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <div className="footer__container">
            <div className="footer__top">
              <div className="footer__top-left">
                <p className="footer__title">Education Gateway</p>
                <div className="footer__left-our">
                  <p className="footer__our-title">Наш адрес:</p>
                  <p className="footer__our-text">
                    Muqumiy ko’chasi, 54a uy, Toshkent, Uzbekistan
                  </p>
                </div>
                <div className="footer__left-email">
                  <p className="footer__our-title">Почта для связи:</p>
                  <p className="footer__our-text">
                    Education_gateway@gmail.com
                  </p>
                </div>
                <div className="footer__left-number">
                  <p className="footer__our-title">Номер для связи:</p>
                  <p className="footer__our-text">+998 55 503 1010</p>
                </div>
                <div className="footer__left-work">
                  <p className="footer__our-title">Часы работы:</p>
                  <p className="footer__our-text">
                    с понедельника по субботу с 9:00 до 18:00
                  </p>
                </div>
              </div>
              <div className="footer__top-center">
                <p className="footer__title">О нас</p>
                <p className="footer__center-text">
                  Education Gateway помогает студентам реализовать свои
                  профессиональные амбиции, помогая им получить образование
                  мирового уровня и сделать карьеру за рубежом.Мы поможем
                  студентам со всего мира в будущем войти в глобальную систему
                  образования благодаря нашему пути и быстрому подаче заявки.
                  Education Gateway обеспечивает клиентов и поддерживает
                  студентов на протяжении их въезда, проживания и обучения за
                  рубежом.
                </p>
              </div>
              <div className="footer__top-right">
                <p className="footer__title">Еженедельные новости</p>
                <p className="footer__follow ">
                  Подпишитесь на еженедельную рассылку чтобы быть в курсе
                  отличных акций
                </p>
                <div className="footer__right-form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="footer__right-email"
                    placeholder="Ваш e-mail адрес"
                  />
                  <Link to={"/"} className="footer__link">
                    Подписаться
                  </Link>
                </div>
                <div className="footer__right-social">
                  <div className="footer__title">
                    Политика конфедициальности
                  </div>
                  <div className="footer__social-icons">
                    <a href="https://instagram.com" target="_blank">
                      <Facebook />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                      <Telegram />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                      <Instagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__bottom">
              <p className="footer__bottom-title">© 2023 All rights reserved</p>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Homefooter;
