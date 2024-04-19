import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BannerSlider from '../../components/Banners/BannerSlider'
import Footer from '../../components/Footer/footer'
import HomeCategories from '../../components/Categories/HomeCategories'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <BannerSlider/>
      <HomeCategories/>
      Home
      <Footer/>
      </div>
  )
}

export default Home