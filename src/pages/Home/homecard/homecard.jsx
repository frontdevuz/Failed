import React from "react";
import Homec from "./homecards";
import Container from "../../../components/container/container";
import Hometitle from "../../../components/hometitle/hometitle";
import "./homecard.scss"
const Homecard = () => {
  return (
    <React.Fragment>
      <section className="university">
        <Container>
          <div className="university__container">
            <Hometitle>Самые популярные Университеты</Hometitle>
            <div className="university__container-card">
              <Homec />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Homecard;
