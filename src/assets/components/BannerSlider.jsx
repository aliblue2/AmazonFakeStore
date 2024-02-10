import React from "react";
import "./BannerSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import BannerSlider1 from "../images/BnnerSlider/1.jpg";
import BannerSlider2 from "../images/BnnerSlider/2.jpg";
import BannerSlider3 from "../images/BnnerSlider/3.jpg";
import BannerSlider4 from "../images/BnnerSlider/4.jpg";

const BannerSlider = () => {
  return (
    <div className="h-[250px] md:h-[500px] relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img
            src={BannerSlider1}
            alt="Bannerslider1"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            src={BannerSlider2}
            alt="Bannerslider1"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            src={BannerSlider3}
            alt="Bannerslider1"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            src={BannerSlider4}
            alt="Bannerslider1"
            className="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 w-full left-0 z-10 h-[40px] bg-gradient-to-b from-transparent to-headingColor"></div>
    </div>
  );
};

export default BannerSlider;
