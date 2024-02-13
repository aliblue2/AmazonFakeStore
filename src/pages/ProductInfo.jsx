import React from 'react'
import { useLocation } from 'react-router-dom'
const ProductInfo = () => {
    const product = useLocation().state;
    console.log(product);
  return (
    <div className="min-h-screen bg-primaryColor w-full p-12">
      
    </div>
  )
}

export default ProductInfo
