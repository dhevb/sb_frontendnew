import React from "react";
import Slider from "react-slick";
import "./banner.css";
const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1483137140003-ae073b395549?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DL._AC_UF894,1000_QL80_.jpg",
      title: "True Indian Buys Indian",
      description: "Organic Items at your Doorstep",
      button: "https://www.google.com",
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/91xO-cJe3EL._AC_UF894,1000_QL80_.jpg",
      title: "True Indian Buys Indian",
      description: "Organic Items at your Doorstep",
      button: "https://www.google.com",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1005549338/photo/homemade-cosmetic-products-source-of-vitamins-for-skincare-and-beauty-treatment.jpg?s=2048x2048&w=is&k=20&c=2YNnBvt6WUCC6djpQtK71Xq0ih9RMWmP-NboWOGBO90=",
      title: "True Indian Buys Indian",
      description: "Organic Items at your Doorstep",
      button: "https://www.google.com",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/2011723764/photo/various-herbs-spice-selling-in-farmers-market-in-bhutan.jpg?s=2048x2048&w=is&k=20&c=JjzJWYvpkTe1z694Ib_B9wK--pkXqeuwOGLpOP8laHc=",
      title: "True Indian Buys Indian",
      description: "Organic Items at your Doorstep",
      button: "https://www.google.com",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bannerslider">
      <Slider className="bannerslider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imagecont" key={item.id}>
              <img src={item.image} alt="bannerImg" />
              <div className="content">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button>Shop More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
