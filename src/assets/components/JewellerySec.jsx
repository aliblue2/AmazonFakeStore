import React from "react";
import ProductsSec from "./ProductsSec";
import CatImage4 from "../images/CaImages/jewelery.png";
import BannerJ1 from "../images/Banners/j1.webp";
import BannerJ2 from "../images/Banners/j2.webp";
import BannerJ3 from "../images/Banners/j3.webp";
import BannerJ4 from "../images/Banners/j4.webp";
const JewellerySec = () => {
  return (
    <div className="my-8 p-5">
         <div className="flex w-full items-center justify-center gap-5">
        <img
          src={CatImage4}
          alt="Electronics Products"
          className="w-[100px] drop-shadow-lg"
        />
        <h5 className="text-3xl font-medium text-primaryColor">
          Jewellery Products
        </h5>
      </div>
      <ProductsSec
        url={"jewelery"}
      />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-12">
        <img src={BannerJ1} alt="BannerJ1" className="rounded-full drop-shadow-md" />
        <img src={BannerJ2} alt="BannerJ1" className="rounded-full drop-shadow-md"/>
        <img src={BannerJ3} alt="BannerJ1" className="rounded-full drop-shadow-md"/>
        <img src={BannerJ4} alt="BannerJ1" className="rounded-full drop-shadow-md"/>
      </div>
    </div>
  );
};

export default JewellerySec;
