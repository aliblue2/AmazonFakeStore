import React from "react";
import ProductsSec from "./ProductsSec";
import CatImage2 from "../images/CaImages/dress.png";


const WomensProductSec = () => {
  return (
    <div className="h-full p-5 bg-gradient-to-b from-blue-700 to-headingColor">
      <div className="flex items-center justify-center gap-5">
        <img
          src={CatImage2}
          alt="CatImage"
          className="w-[120px] drop-shadow-md"
        />
        <h3 className="text-3xl font-medium text-headingColor">
        Women's clothing Products
        </h3>
      </div>
      <ProductsSec url={"women's clothing"} />

    </div>
  );
};

export default WomensProductSec;
