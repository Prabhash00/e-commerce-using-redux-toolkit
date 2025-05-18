import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { RiArrowDropRightLine, RiArrowDropUpLine } from "react-icons/ri";

function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const saveEmail = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <>
      <div className="footer-parent">
        <div className="footer-container">
          <div className="footer-content partA">
            <h1 className="footer-heading">STAY CONNECTED</h1>
            <p>
              Join our Community for latest newsletters by subscribing us via
              email.
            </p>
            <form onSubmit={saveEmail}>
              <input
                className="border-1 rounded p-2 m-4 bg-gray-200"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-400 p-2 border border-gray-400 rounded  hover:bg-green-500 hover:text-white 
                           hover:cursor-pointer "
              >
                SUBMIT
              </button>
            </form>
            <div className="social-media">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </div>
          <div className="footer-content partB">
            <h1 className="footer-heading">CONTACT US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus unde alias perspiciatis commodi quae consectetur ipsam
              error velit atque pariatur. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum quae illo cupiditate
              ratione porro vitae.
            </p>
            <p>
              <strong>Email: </strong>help@xyx.com
              <br />
              <strong>Phone: </strong>+91-1234567890
            </p>
          </div>
          <div className="footer-content partC">
            <h1 className="footer-heading">NAVIGATE</h1>
            <span>
              <button className="link-footer" onClick={scrollToTop}>
                Scroll To Top <RiArrowDropUpLine className="text-[40px]" />
              </button>

              <Link className="link-footer" to={"/"}>
                Home
                <RiArrowDropRightLine />
              </Link>
              <Link className="link-footer" to={"/prod-cate"}>
                Product Categories
                <RiArrowDropRightLine />
              </Link>
              <Link className="link-footer" to={"/cart"}>
                Cart
                <RiArrowDropRightLine />
              </Link>
            </span>
          </div>
        </div>
        <hr />
        <div className="footer-base">
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p className="flex gap-0.5 items-center">
            <FaRegCopyright /> 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
