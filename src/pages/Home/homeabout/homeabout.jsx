import React, { useEffect } from "react";
import Container from "../../../components/container/container";
import Univerty__icon from "../../../assets/images/svg/031   University.svg";
import Corona__icon from "../../../assets/images/svg/coronavirus 1.svg";
import Hometitle from "../../../components/hometitle/hometitle";
import "./homeabout.scss";
const Aside = () => {
  return (
    <React.Fragment>
      <section className="aside">
        <Container>
          <div className="aside__container">
            <Hometitle>О нас</Hometitle>
            <div className="aside__container-dom">
              <div
                className="aside__right"
                data-aos="fade-right"
                data-aos-duration="5000"
                data-aos-easing="linear"
              >
                <div className="aside__right-top">
                  <div className="aside__right-img">
                    <img
                      src={Univerty__icon}
                      alt="This is a Universty icon"
                      className="aside__universty-icon"
                    />
                  </div>
                  <div className="aside__right-about">
                    <p className="aside__right-title">
                      2<span>5</span>0+
                    </p>
                    <p className="aside__right-description">
                      Университеты партнёры
                    </p>
                  </div>
                </div>
                <div className="aside__right-bottom">
                  <div className="aside__right-img">
                    <img
                      src={Univerty__icon}
                      alt="This is a Universty icon"
                      className="aside__universty-icon"
                    />
                  </div>
                  <div className="aside__right-about">
                    <p className="aside__right-title">100+</p>
                    <p className="aside__right-description">
                      Стран куда мы отправляем
                    </p>
                  </div>
                </div>
              </div>
              <div className="aside__left"
                data-aos="fade-left"
                data-aos-duration="5000"
                data-aos-easing="linear">
                <div className="aside__left-top">
                  <div className="aside__left-img">
                    <img
                      src={Corona__icon}
                      alt="This is a corona icon"
                      className="aside__corona-icon"
                    />
                  </div>
                  <div className="aside__right-about">
                    <p className="aside__right-title">100+</p>
                    <p className="aside__right-description">
                      Стран куда мы отправляем
                    </p>
                  </div>
                </div>
                <div className="aside__left-bottom">
                  <div className="aside__left-img">
                    <img
                      src={Corona__icon}
                      alt="This is a corona icon"
                      className="aside__corona-icon"
                    />
                  </div>
                  <div className="aside__right-about">
                    <p className="aside__right-title">
                      2<span>5</span>0+
                    </p>
                    <p className="aside__right-description">
                      Университеты партнёры
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Aside;
