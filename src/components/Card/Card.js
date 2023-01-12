// import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Card.css";

// import required modules
import { Pagination, EffectCards } from "swiper";
import 'swiper/css/pagination';


function SwiperCard (props) {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, EffectCards]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={false}
        className="mySwiper"
      >

        {props.data.map((card) => {
          return (
            <SwiperSlide key={card.cardNumber}>
              <div className="cardContainer">
                <div className="cardImg" >
                  <img src="../asset/image/Cart2.png" alt='' />
                </div>
                <p className="cardNumber">{card.cardNumber}</p>
                <p className="cardHolderName">{card.cardHolderName}</p>
                <p className="expirationDate">{card.expirationDate}</p>
              </div>
            </SwiperSlide>
          );
        })
        }
        <SwiperSlide><img src="../asset/image/Cart1.png" alt='' /></SwiperSlide>
        <SwiperSlide><img src="../asset/image/Cart4.png" alt='' /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperCard;
