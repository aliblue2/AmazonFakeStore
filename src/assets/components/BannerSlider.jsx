import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "./Swiper.css"

import BannerSlider1 from "../images/BnnerSlider/1.jpg";
import BannerSlider2 from "../images/BnnerSlider/2.jpg";
import BannerSlider3 from "../images/BnnerSlider/3.jpg";
import BannerSlider4 from "../images/BnnerSlider/4.jpg";

const BannerSlider = () => {
  return (
    <div className="overflow-hidden relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="md:mySwiper "
      >
        <SwiperSlide className="BannerSlider max-h-[500px]">
          <img
            src={BannerSlider1}
            alt="Bannerslider1"
            className=" w-full h-fit object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="BannerSlider max-h-[500px]">
          <img
            src={BannerSlider2}
            alt="Bannerslider1"
            className=" w-full h-fit object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="BannerSlider max-h-[500px]">
          <img
            src={BannerSlider3}
            alt="Bannerslider1"
            className=" w-full h-fit object-fill"
          />
        </SwiperSlide>
        <SwiperSlide className="BannerSlider max-h-[500px]">
          <img
            src={BannerSlider4}
            alt="Bannerslider1"
            className=" w-full h-fit object-fill"
          />
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
};

export default BannerSlider;
