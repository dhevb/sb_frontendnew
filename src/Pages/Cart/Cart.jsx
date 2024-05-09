import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/footer'
import SingleBanner from '../../components/Banners/SingleBanner'
import coverphoto from"../../assets/coverphoto.jpg"

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <SingleBanner heading="My Cart" bannerImage={coverphoto} />
      cart
      <Footer/>
    </div>
  )
}

export default Cart