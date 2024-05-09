import React from "react";
import BannerSlider from "../../components/Banners/BannerSlider";
import HomeCategories from "../../components/Categories/HomeCategories";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
import Product_Sidebar from "../../components/Products/Product_Sidebar";

const Home = () => {
  return (
    <div
      // style={{
      //   background:
      //     "linear-gradient(90deg, #FF9933 -0%, #FFFFFF 40%, #128807 50%)",
      // }}
    >
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer />
    </div>
  );
};

export default Home;
