import React from "react";
import "./homecategories.css";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import cycle1 from "../../assets/cycle1.jpg";
import cycle2 from "../../assets/cycle2.jpg";
import diya1 from "../../assets/diya1.jpg";
import diya2 from "../../assets/diya2.jpg";
import viskitbook from "../../assets/viskitbook.jpg";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="containers">
        <img src={book1} alt="book" />
        <div className="contents">
          <h1>Book1</h1>
          <p>loren ipsum</p>
        </div>
      </div>
      <div className="containers">
        <img src={book2} alt="book" />
        <div className="contents">
          <h1>Book2</h1>
          <p>loren ipsum</p>
        </div>
      </div>
      <div className="containers">
        <img src={book3} alt="book" />
        <div className="contents">
          <h1>Book3</h1>
          <p>loren ipsum</p>
        </div>
      </div>
      <div className="containers">
        <img src={cycle1} alt="cycle" />
        <div className="contents">
          <h1>Cycle1</h1>
          <p>loren ipsum</p>
        </div>
      </div>
      <div className="containers">
        <img src={cycle2} alt="cycle" />
        <div className="contents">
          <h1>Cycle2</h1>
          <span>loren ipsum</span>
        </div>
      </div>
      <div className="containers">
        <img src={diya1} alt="diya" />
        <div className="contents">
          <h1>Diya1</h1>
          <span>loren ipsum</span>
        </div>
      </div>
      <div className="containers">
        <img src={diya2} alt="diya" />
        <div className="contents">
          <h1>Diya2</h1>
          <span>loren ipsum</span>
        </div>
      </div>
      <div className="containers">
        <img src={viskitbook} alt="book" />
        <div className="contents">
          <h1>Viksit Bharat Book</h1>
          <p>loren ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
