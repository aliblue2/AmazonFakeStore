import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules

import "./Swiper.css";
// import axios
import axios from "axios";
import OfferImg from "../images/CaImages/offer.png";
const ProductsSlider = () => {
  const baseUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(baseUrl);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="w-full h-full my-12 flex gap-5 items-center bg-primaryColor p-5">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        className="ProductSwiper"
      >
        <SwiperSlide
          className="flex flex-col items-center justify-center h-[300px] gap-5"
        >
          <img src={OfferImg} alt="OfferLogo" className="max-w-[120px]" />
          <h4 className="md:text-xl text-lg font-bold text-headingColor">
            Top Our Products
          </h4>
          <button className="bg-headerColor hover:bg-headingColor transition-colors duration-300 text-primaryColor p-1 px-4 rounded-md">
            See All products
          </button>
        </SwiperSlide>
        {products.slice(0, 10).map((product) => {
          return (
            <SwiperSlide
              className="productSlide rounded-lg bg-headerColor hover:bg-[#ccc] hover:cursor-pointer transition-all ease-in-out duration-300 group"
              key={product.id}
            >
              <img src={product.image} alt="" />
              <div className="flex flex-col items-start w-full gap-2 p-2">
                <h5 className="text-lg text-primaryColor font-medium">
                  {product.title.slice(0,12)}
                </h5>
                <p className="text-primaryColor text-sm">
                  {product.description.slice(0,35)}
                </p>
                <span className="text-gray-600 bg-gray-200 px-2 rounded-md' text-xs">
                  {product.category}
                </span>
                <div className="flex items-center justify-start gap-2">
                  <span className="text-primaryColor text-sm">
                    Rate : {product.rating.rate}
                  </span>
                  <span className="text-sm text-primaryColor">
                   ({product.rating.count})
                  </span>
                </div>
                <h3 className="text-primaryColor font-bold text-xl">
                  {product.price.toLocaleString('en-US') + " $"}
                </h3>
                <button className="w-full py-1 px-4 transition-colors duration-300 rounded-md bg-primaryColor text-headingColor font-medium group-hover:bg-blue-700 ">
                  Add To Cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
