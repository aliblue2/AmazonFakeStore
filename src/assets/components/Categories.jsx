import React, { useEffect, useState } from "react";
import axios from "axios";
const Categories = () => {
  const CategiriesUrl = "https://fakestoreapi.com/products/categories";
  const [categoriesArr, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(CategiriesUrl);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="my-5 p-2">
      <h5 className="text-2xl font-medium text-center">
        Categories
      </h5>
      <div className="flex items-center w-full justify-center gap-5 mt-5">
        {
          categoriesArr.map((cat) => {
            return <span className="text-primaryColor bg-headerColor p-2 rounded-md shadow-md md:text-xl md:font-medium truncate w-[120px] text-center" key={cat}>{cat}</span>
          })
        }
      </div>
    </div>
  );
};

export default Categories;
