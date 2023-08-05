import React from "react";
import { Homeflags } from "./../../../data/Homeflags";
import "./homeflag.scss";
import Container from "./../../../components/container/container";
import Hometitle from "./../../../components/hometitle/hometitle";
import { Link } from "react-router-dom";
const Homeflag = () => {
  return (
    <React.Fragment>
      <section className="flag">
        <Container>
          <div className="flag__container">
          <Hometitle>Самые популярные факультеты</Hometitle>
            <div className="flag__card__box">
              {Homeflags.map((flag) => {
                return (
                  <Link to={"/"}>
                    <div className="flag__card">
                      <img
                        src={flag.img}
                        alt="This is flag card title"
                        className="flag__img"
                      />
                      <div className="flag__container-title">
                        <p className="flag__title">{flag.title}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homeflag;
