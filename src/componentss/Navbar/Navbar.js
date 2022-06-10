import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import emon from "../../assets/images/emon_morol.png";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const links = <></>;

  const changeBg = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <div className={`navigation ${navbar ? "active" : ""} z-50`}>
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start w-full lg:w-1/4">
            <div className="avatar">
              <div className=" w-8 lg:w-10 rounded-full">
                <img src={emon} alt="" />
              </div>
              <h4>Ekramul</h4>
            </div>
          </div>
          <div className="navbar-end hidden w-full lg:flex">
            <ul className="menu w-full flex py-2 justify-end menu-horizontal p-0">
              <li>
                <Link smooth to="/landing#home">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="/landing#services">
                  Services
                </Link>
              </li>
              <li>
                <Link smooth to="/landing#portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link smooth to="/landing#resume">
                  Resume
                </Link>
              </li>
              <li>
                <Link smooth to="/landing#resume">
                  About Me
                </Link>
              </li>
              <li>
                <Link smooth to="/landing#resume">
                  Blogs
                </Link>
              </li>
              <li>
                <Link smooth to="/landing#contact">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
