import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/footer'
import SingleBanner from '../../components/Banners/SingleBanner'
import coverphoto from"../../assets/coverphoto.jpg"

const Cart = () => {

  const getcartitemsfromlocalstorage =()=>{
    let cart = JSON.parse(localStorage.getItem("cart"))

    if(cart){
      console.log(cart)
    }
  }

  useEffect(()=>{
    getcartitemsfromlocalstorage()
  },[])
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