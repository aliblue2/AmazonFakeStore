import React from 'react'
import CatImage2 from "../images/CaImages/dress.png";
import ProductsSec from './ProductsSec';
import BannerImg1 from "../images/Banners/m1.webp";
import BannerImg2 from "../images/Banners/m2.webp";
import BannerImg3 from "../images/Banners/m3.webp";
import BannerImg4 from "../images/Banners/m4.webp";

const MensProductSec = () => {
  return (
    <div className="h-full py-12 px-5 bg-gradient-to-b from-headingColor to-blue-700">
      <div className="flex items-center justify-center gap-5">
        <img src={CatImage2} alt="CatImage" className="w-[120px] drop-shadow-md" />
        <h3 className="text-3xl font-medium text-primaryColor">
        Men's clothing Products
        </h3>
      </div>
      <ProductsSec url={"men's clothing"} />
      <div className="grid grid-cols-2 md:grid-cols-4 mt-12 gap-5">
        <img src={BannerImg1} alt="BannerImage1" className="rounded-lg shadow-md" />
        <img src={BannerImg2} alt="BannerImage2" className="rounded-lg shadow-md" />
        <img src={BannerImg3} alt="BannerImage3" className="rounded-lg shadow-md" />
        <img src={BannerImg4} alt="BannerImage4" className="rounded-lg shadow-md" />
      </div>
    </div>
  )
}

export default MensProductSec
