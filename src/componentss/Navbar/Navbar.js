import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import emon from "../../assets/images/emon_morol.png";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const links = (
    <>
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
        <Link smooth to="/landing#contact">
          Contact me
        </Link>
      </li>
    </>
  );

  const changeBg = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={`navigation ${navbar ? "active" : ""} z-50`}>
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start w-full lg:w-1/4">
          <div className="dropdown dropdown-end w-full flex justify-between ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={emon} alt="" />
              </div>
              <h4>Ekramul</h4>
            </div>
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <i className="text-3xl fa-solid fa-bars"></i>
            </label>
            <ul
              tabIndex="0"
              className="menu py-2 navbar-end menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-accent rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden w-full lg:flex">
          <ul className="menu w-full flex py-2 justify-end menu-horizontal p-0">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
