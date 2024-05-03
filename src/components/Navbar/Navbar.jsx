import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [cartquantity, setcartquantity] = useState(0);
  return (
    <nav>
      <div className="s1">
        <img src={logo} alt="logo" className="logo" />

        < div className="searchbar">
          <input
            type="text"
            placeholder="Search for products and categories "
            className="search"
          />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        
        </div>
          <div className="right">
            <div className="cart">
              <span className="qty">{cartquantity}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
      </div>
      <div className="s2">
        <Link to="/">
        <a>Home</a>
        </Link>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Books</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Herbal Products</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bicycle</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Decoration</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/aboutus">
          <a>About Us</a>
        </Link>
        <Link to="/contactus">
        <a>Contact Us</a>
        </Link>
        <Dropdown>
          <Dropdown.Toggle variant="" id="  ">
            More
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Terms & Condition</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
    </nav>
  );
};

export default Navbar;
