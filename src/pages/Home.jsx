import React, { useEffect } from 'react'
import Header from '../assets/components/Header'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../assets/components/Footer'
import BannerSlider from '../assets/components/BannerSlider'
const Home = () => {
  useEffect(() => {
    Aos.init()
  } , [])
  return (
    <div className="bg-headingColor h-full">
      <Header />
      <BannerSlider />
      <Footer />
    </div>
  )
}

export default Home
