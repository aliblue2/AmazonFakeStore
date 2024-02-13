import axios from "axios";
import React, { useEffect, useState } from "react";
import CatImage3 from "../images/CaImages/electronics.png";
import BannerE1 from "../images/Banners/e1.webp";
import BannerE2 from "../images/Banners/e2.webp";
import BannerE3 from "../images/Banners/e3.webp";
import BannerE4 from "../images/Banners/e4.jpg";
import ProductsSec from "./ProductsSec";

const ElectronicsProducts = () => {
  
  return (
    <div className="my-5 px-4 w-full">
      <div className="flex w-full items-center justify-center gap-5">
        <img
          src={CatImage3}
          alt="Electronics Products"
          className="w-[100px] drop-shadow-lg"
        />
        <h5 className="text-3xl font-medium text-primaryColor">
          Electronics Products
        </h5>
      </div>

      <ProductsSec url={"electronics"} />
      
      <div className="grid-cols-2 md:grid-cols-4 grid gap-2 my-5 px-2">
        <img
          src={BannerE1}
          alt="BannerImage1"
          className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
        <img
          src={BannerE2}
          alt="BannerImage2"
          className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
        <img
          src={BannerE3}
          alt="BannerImage2"
          className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
        <img
          src={BannerE4}
          alt="BannerImage2"
          className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"
        />
      </div>
    </div>
  );
};
export default ElectronicsProducts;
