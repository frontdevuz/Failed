import React from "react";
import Container from "../../../components/container/container";
import Hometitle from "../../../components/hometitle/hometitle";
import Homes from "./homes";
import "./homeslider.scss"
const Homeslider = () => {
  return (
    <React.Fragment>
      <section className="slider">
        <Container>
          <Hometitle>Что говорят наши студенты?</Hometitle>
          <div className="slider__container">
            <Homes />
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homeslider;
