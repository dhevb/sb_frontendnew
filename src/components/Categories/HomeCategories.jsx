import React from "react";
import "./homecategories.css";
import book1 from "../../assets/book1.jpg";
import cycle1 from "../../assets/cycle1.jpg";
import diya1 from "../../assets/diya1.jpg";
import viskitbook from "../../assets/viskitbook.jpg";

const HomeCategories = () => {
  return (
    <div
      className="homecategories"
      // style={{
      //   background:
      //     "linear-gradient(90deg, #FF9933 0%, #FFFFFF 33%, #128807 66%)",
      // }}
    >
      <div className="containers">
        <img src={book1} alt="book" />
        <div className="contents">
          <h1>Books</h1>
          <p></p>
        </div>
      </div>

      <div className="containers">
        <img src={cycle1} alt="cycle" />
        <div className="contents">
          <h1>E-cycles</h1>
          <p></p>
        </div>
      </div>
      <div className="containers">
        <img src={diya1} alt="diya" />
        <div className="contents">
          <h1>Shurbhi-Diyas</h1>
          <p></p>
        </div>
      </div>
      <div className="containers">
        <img src={viskitbook} alt="book" />
        <div className="contents">
          <h1>Viksit Bharat Book</h1>
          <p></p>
        </div>
      </div>
      <div className="containers">
        <img
          src="https://plus.unsplash.com/premium_photo-1686285541221-1c0be9f3c4fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlcmJhbCUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
          alt="herbalproduct"
        />
        <div className="contents">
          <h1>Herbal Products</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
