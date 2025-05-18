import React from "react";
import { FaCartShopping } from "react-icons/fa6";

import { Link } from "react-router";

function Header({ count }) {
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">
          <Link to={'/'}>E-Commerce Website</Link>
        </h1>

        <div className="nav-container">
          <button className="link"></button>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/prod-cate">
            Product Category
          </Link>
          {count === 0 ? (
            <Link className="link" to="/cart">
              <FaCartShopping />
            </Link>
          ) : (
            <Link className="link" to="/cart">
              <FaCartShopping />
              <div className="count">{count}</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
