import React from "react";
import CatImage2 from "../images/CaImages/dress.png";
import CatImage3 from "../images/CaImages/electronics.png";
import CatImage4 from "../images/CaImages/jewelery.png";
const Categories = () => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-bold text-primaryColor text-center my-5">
        Categories
      </h2>
      <div className="max-w-[1200px] mx-auto px-5 grid gap-5 grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={CatImage2}
            alt="Products Styles"
            className="max-w-[120px]"
          />
          <h3 className="text-primaryColor md:text-xl text-center font-medium">
            Styles Products
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={CatImage3}
            alt="Digital Producs"
            className="max-w-[120px]"
          />
          <h3 className="text-primaryColor md:text-xl text-center font-medium">
            Digital Producs
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={CatImage4}
            alt="Jewellery Products"
            className="max-w-[120px]"
          />
          <h3 className="text-primaryColor md:text-xl text-center font-medium">
            Jewellery Products
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
