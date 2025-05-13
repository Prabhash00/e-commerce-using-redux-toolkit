import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="header-container">
        <h1>E-Commerce Website</h1>
        <div className="nav-container">
          <button className="link">
            <IoIosSearch/>
          </button>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/product">
            Product Category
          </Link>
          <Link className="link" to="/cart">
            <FaCartShopping />
            <div className="count">1</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
