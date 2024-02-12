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
  const [count , setCount] = useState(5);
  const changeCountHandler = () => {
    setCount((prevValue) => {
      return prevValue += 5;
    })
  }
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
    <div className="w-full h-full my-12 flex gap-5 items-center bg-gradient-to-r from-primaryColor to-blue-700 py-12">
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
            slidesPerView: 5.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 20,
          },
        }}
        className="ProductSwiper px-5"
      >
        <SwiperSlide className="flex flex-col items-center justify-center h-[300px] gap-5">
          <img src={OfferImg} alt="OfferLogo" className="max-w-[120px]" />
          <h4 className="md:text-xl text-lg font-bold text-headingColor">
            Top Our Products
          </h4>
          <a href="#" className="text-headingColor underline">
            see all products
          </a>
        </SwiperSlide>
        {products.slice(0, count).map((product) => {
          return (
            <SwiperSlide
              className="productSlide rounded-lg bg-headerColor hover:bg-[#ccc] hover:cursor-pointer transition-all ease-in-out duration-300 group"
              key={product.id}
            >
              <img src={product.image} alt="" />
              <div className="w-full h-[220px] mt-2 relative flex flex-col items-start justify-start gap-2">
                <h3 className="md:text-xl text-lg font-medium pl-2">
                  {product.title.slice(0,10)}
                </h3>
                <p className="text-primaryColor text-sm pl-2 w-full">
                  {product.description.slice(0,35)}
                </p>
                <span className="text-gray-600 bg-gray-200 ml-2 px-2 text-sm rounded-md">
                  {product.category}
                </span>
                <span className="text-primaryColor text-sm pl-2">
                  Rate : {product.rating.rate}
                </span>
                <h4 className="text-primaryColor font-bold text-lg pl-2">
                  {product.price.toLocaleString('en-US') + " $"}
                </h4>
                <button className="w-full group-hover:bg-blue-700 transition-colors duration-700 rounded-md py-1 text-headingColor bg-primaryColor absolute bottom-[2px]">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="bg-headingColor flex h-[350px] rounded-lg flex-col items-center justify-center gap-5 cursor-pointer" onClick={changeCountHandler}>
        See More Products 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
