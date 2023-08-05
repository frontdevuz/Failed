import React,{useEffect}from "react";
import { Link } from "react-router-dom";
import { Homestar, Star } from "../../../icons/icons";
import { Homecards } from "../../../data/Homecards";
import Aos from "aos";
import "aos/dist/aos.css";
import "./homecards.scss";
const Homec = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <React.Fragment>
      {Homecards.map((card) => {
        return (
          <div
            className="university__card"
            data-aos="fade-right"
            data-aos-duration="5000"
            data-aos-easing="linear"
          >
            <div className="university__card-top">
              <img
                src={card.img}
                alt="This is a Univesty img svg"
                className="university__card-img"
              />
              <span className="university__card-star">
                <Homestar />
              </span>
            </div>
            <div className="university__card-bottom">
              <p className="university__bottom-title">{card.title}</p>
              <p className="university__card-description">
                {card.description}
                <Link className="university__bottom-link">{card.link}</Link>
              </p>
              <div className="university__bottom-rating">
                <p className="university__rating">{card.rating}</p>
                <p className="university__rating-text">{card.ratingabout}</p>
              </div>
              <div className="university__education">
                <p className="university__education-title">
                  {card.ratingtitle}
                  <div className="university__education-star">
                    <span className="university__edu-star">
                      <Star />
                    </span>
                    <span className="university__edu-star">
                      <Star />
                    </span>
                    <span className="university__edu-star">
                      <Star />
                    </span>
                    <span className="university__edu-star">
                      <Star />
                    </span>
                  </div>
                </p>
                <div className="university__card-price">
                  <p className="university__c-price">{card.price}</p>
                  <p
                    className="university__c-cash"
                    style={{ fontWeight: 600, fontSize: "19px" }}
                  >
                    {card.pricenumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default Homec;
