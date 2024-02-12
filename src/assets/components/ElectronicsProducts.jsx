import axios from "axios";
import React, { useEffect, useState } from "react";
import CatImage3 from "../images/CaImages/electronics.png";
import BannerE1 from "../images/Banners/e1.webp";
import BannerE2 from "../images/Banners/e2.webp";
import BannerE3 from "../images/Banners/e3.webp";
import BannerE4 from "../images/Banners/e4.jpg";

const ElectronicsProducts = () => {
  const [eProducts, setEProducts] = useState([]);
  const electronicProducturl =
    "https://fakestoreapi.com/products/category/electronics";
  useEffect(() => {
    const fetchEProducts = async () => {
      const response = await axios.get(electronicProducturl);
      setEProducts(response.data);
    };

    fetchEProducts();
  }, []);
  return (
    <div className="my-5 px-4 w-full">
      <div className="flex w-full items-center justify-center gap-5">
        <img src={CatImage3} alt="Electronics Products" className="w-[100px] drop-shadow-lg" />
        <h5 className="text-3xl font-medium text-primaryColor">
          Electronics Products
        </h5>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-5 mt-5 px-2">
        {eProducts.map((product) => {
          return (
            <div className="bg-headerColor group transition-colors duration-300 hover:bg-[#ccc] h-[380] p-[2px] relative shadow-md rounded-lg overflow-hidden cursor-pointer" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full p-5 rounded-md h-[120px] object-contain bg-[#ddd]"
              />
              <div className="flex p-2 relative flex-col h-[250px] mt-1 gap-4">
                <h3 className="md:text-lg text-primaryColor font-medium">
                  {product.title.slice(0, 19)}
                </h3>
                <p className="text-primaryColor whitespace-pre-line">
                  {product.description.slice(0, 75).toLowerCase()}
                </p>
                <span className="bg-gray-200 text-gray-600 text-sm px-2 w-fit rounded-md py-[1px]">
                  {product.category}
                </span>
                <p className="text-primaryColor text-sm font-medium">
                  {product.rating.rate}
                  <span className="text-primaryColor font-medium ml-2">
                    ( {product.rating.count} )
                  </span>
                </p>
                <h3 className="text-xl group-hover:text-blue-700 transition-colors duration-700 text-primaryColor font-bold absolute bottom-1 right-1">
                  {product.price.toLocaleString() + " $"}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid-cols-2 md:grid-cols-4 grid gap-2 my-5 px-2">
        <img src={BannerE1} alt="BannerImage1" className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"/>
        <img src={BannerE2} alt="BannerImage2" className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"/>
        <img src={BannerE3} alt="BannerImage2" className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"/>
        <img src={BannerE4} alt="BannerImage2" className="rounded-md shadow-md border-gray-300 border-solid border grayscale hover:grayscale-0 transition-all ease-in-out duration-300"/>
      </div>
    </div>
  );

};
export default ElectronicsProducts;
