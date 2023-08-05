import React from "react";
import "./notfound.scss";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <React.Fragment>
      <div className="notfound">
        <div className="notfound__container">
          <h1 className="notfound__title">404</h1>
          <p className="notfound__sorry">
            Извините но мы не нашли эту страницу
          </p>
          <p className="notfound__text">
            Как вы думайте кто дурак , вы не так поисковали !!!!
          </p>
          <Link to={"/"} className="notfound__btn">Вернуться в главную</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notfound;
