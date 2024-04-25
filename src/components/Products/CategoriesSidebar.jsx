import React from "react";
import "./categorysidebar.css";
import book1 from "../../assets/book1.jpg";
import cycle2 from "../../assets/cycle2.jpg";
import herbalproduct from "../../assets/herbalproduct.png";
import diya from "../../assets/diya.png";

const CategoriesSidebar = () => {
  const data = [
    {
      id: 1,
      categoryimage: book1,
      categoryname: "Books",
    },
    {
      id: 2,
      categoryimage: cycle2,
      categoryname: "Cycle",
    },
    {
      id: 3,
      categoryimage: herbalproduct,
      categoryname: "Herbal Product",
    },
    {
      id: 4,
      categoryimage: diya,
      categoryname: "Shurbhi Diya",
    },
  ];
  return (
    <div className="categorysidebar">
      {data.map((item) => {
        return (
          <div className="category">
            <img src={item.categoryimage} alt="categoryImage" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesSidebar;