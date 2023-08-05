import React from "react";
import "./hometitle.scss";
const Hometitle = (props) => {
  return (
    <React.Fragment>
      <div className="title">
        <p className="title__name">{props.children}</p>
      </div>
    </React.Fragment>
  );
};

export default Hometitle;
