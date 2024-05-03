import React from "react";
import "./allproduct.css";
import ProductCard from "./ProductCard";
import book1 from "../../assets/book1.jpg";
import book3 from "../../assets/book3.jpg";
import book2 from "../../assets/book2.jpg";
import cycle1 from "../../assets/cycle1.jpg";
import cycle2 from "../../assets/cycle2.jpg";
import diya from "../../assets/diya.png";
import diya1 from "../../assets/diya1.jpg";
import diya2 from "../../assets/diya2.jpg";
import viskitbook from "../../assets/viskitbook.jpg";
import herbalproduct from "../../assets/herbalproduct.png";
const AllProducts = () => {
  const products = [
    {
      id: 1,
      productimage: book1,
      productname: "Book",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 12,
    },
    {
      id: 2,
      productimage: book2,
      productname: "Book",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 15,
    },
    {
      id: 3,
      productimage: book3,
      productname: "Book",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 15,
    },
    {
      id: 4,
      productimage: cycle1,
      productname: "E-cycle",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 15,
    },
    {
      id: 5,
      productimage: cycle2,
      productname: "E-cycle",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 15,
    },
    {
      id: 6,
      productimage: diya,
      productname: "Diya",
      productprice: 100,
      counttype: "12 per pack",
      discountpercentage: 12,
    },
    {
      id: 7,
      productimage: diya1,
      productname: "Shurbhi-Diya",
      productprice: 100,
      counttype: "12 per pack",
      discountpercentage: 12,
    },
    {
      id: 8,
      productimage: diya2,
      productname: "Shurbhi-Diya",
      productprice: 100,
      counttype: "12 per pack",
      discountpercentage: 12,
    },
    {
      id: 9,
      productimage: viskitbook,
      productname: "Viksit Bharat Pustak",
      productprice: 200,
      counttype: "1 each",
      discountpercentage: 12,
    },
    {
      id: 10,
      productimage: herbalproduct,
      productname: "Herbal Products ",
      productprice: 120,
      counttype: "1 packet",
      discountpercentage: 12,
    },
  ];
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
