import React, { useEffect } from 'react'
import Header from '../assets/components/Header'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../assets/components/Footer'
import BannerSlider from '../assets/components/BannerSlider'
import Categories from '../assets/components/Categories'
import PreHeader from '../assets/components/PreHeader'
import ProductsSlider from '../assets/components/ProductsSlider'
const Home = () => {
  useEffect(() => {
    Aos.init()
  } , [])
  return (
    <div className="bg-headingColor h-full">
      <PreHeader />
      <Header />
      <BannerSlider />
      <Categories />
      <ProductsSlider />
      <Footer />
    </div>
  )
}

export default Home
