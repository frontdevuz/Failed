import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./homeslider.scss";
import koreyanka from "../../../assets/images/svg/koreyanka.svg"
import china from "../../../assets/images/svg/china.svg";
import mulatka from "../../../assets/images/svg/mulatka.svg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Homes() {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper slider__myslider "
      >
        <SwiperSlide className="slider__slider">
          <div className="slider__card">
            <div className="slider__card-top">
              <div className="slider__card-img">
                <img src={koreyanka} alt="This is a slider img" />
              </div>
              <div className="slider__top-about">
                <p className="slider__card-name">Nargiza Akhmedova</p>
                <p className="slider__card-job">Бакалавр по IT</p>
                <p className="slider__card-job">Texas State University</p>
              </div>
            </div>
            <div className="slider__card-bottom">
              <p className="slider__card-text">
                Webster University is a private university with its main campus
                in Webster Groves, Missouri. It has multiple branch locations
                across the United States and countries countries, Missouri. It
                has multiple branch locations across the United States and
                countries countries, Missouri. It has multiple branch locations
                across the United States and countries countries.
              </p>
            </div>
          </div>
          <div className="slider__card">
            <div className="slider__card-top">
              <div className="slider__card-img">
                <img src={china} alt="This is a slider img" />
              </div>
              <div className="slider__top-about">
                <p className="slider__card-name">Tina Pak</p>
                <p className="slider__card-job">Бакалавр по IT</p>
                <p className="slider__card-job">Texas State University</p>
              </div>
            </div>
            <div className="slider__card-bottom">
              <p className="slider__card-text">
                Webster University is a private university with its main campus
                in Webster Groves, Missouri. It has multiple branch locations
                across the United States and countries countries, Missouri. It
                has multiple branch locations across the United States and
                countries countries, Missouri. It has multiple branch locations
                across the United States and countries countries.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__slider">
          <div className="slider__card">
            <div className="slider__card-top">
              <div className="slider__card-img">
                <img src={mulatka} alt="This is a slider img" />
              </div>
              <div className="slider__top-about">
                <p className="slider__card-name">Ellis Rozy</p>
                <p className="slider__card-job">Бакалавр по IT</p>
                <p className="slider__card-job">Texas State University</p>
              </div>
            </div>
            <div className="slider__card-bottom">
              <p className="slider__card-text">
                Webster University is a private university with its main campus
                in Webster Groves, Missouri. It has multiple branch locations
                across the United States and countries countries, Missouri. It
                has multiple branch locations across the United States and
                countries countries, Missouri. It has multiple branch locations
                across the United States and countries countries.
              </p>
            </div>
          </div>
          <div className="slider__card">
            <div className="slider__card-top">
              <div className="slider__card-img">
                <img src={china} alt="This is a slider img" />
              </div>
              <div className="slider__top-about">
                <p className="slider__card-name">Tina Pak</p>
                <p className="slider__card-job">Бакалавр по IT</p>
                <p className="slider__card-job">Texas State University</p>
              </div>
            </div>
            <div className="slider__card-bottom">
              <p className="slider__card-text">
                Webster University is a private university with its main campus
                in Webster Groves, Missouri. It has multiple branch locations
                across the United States and countries countries, Missouri. It
                has multiple branch locations across the United States and
                countries countries, Missouri. It has multiple branch locations
                across the United States and countries countries.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

