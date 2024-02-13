import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductsSec = ({ url}) => {
  const [products, setProducts] = useState([]);
  const BaseURL = `https://fakestoreapi.com/products/category/${url}`;
  useEffect(() => {
    const fetchEProducts = async () => {
      const response = await axios.get(BaseURL);
      setProducts(response.data);
    };

    fetchEProducts();
  }, []);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-5 mt-5 px-2">
      {products.map((product) => {
        return (
          <div
            className="bg-headerColor group transition-colors duration-300 hover:bg-[#ccc] h-[410px] md:h-96 p-[2px] relative shadow-md rounded-lg overflow-hidden cursor-pointer"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full p-5 rounded-md h-[120px] object-contain bg-[#ddd] group-hover:bg-primaryColor group-hover:bg-opacity-20 transition-colors duration-300"
            />
            <div className="flex p-2 relative flex-col h-[250px] mt-1 gap-2 md:gap-3 lg:gap-5">
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
            </div>
            <h3 className="text-xl  group-hover:text-blue-700 transition-colors duration-700 text-primaryColor font-bold absolute bottom-1 right-2">
              {product.price.toLocaleString() + " $"}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsSec;
