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
    </>
  );

  const changeBg = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY, navbar);
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={`navigation ${navbar ? "active" : ""} z-50`}>
      <div class="navbar max-w-7xl mx-auto">
        <div class="navbar-start w-full lg:w-1/4">
          <div class="dropdown dropdown-end w-full flex justify-between ">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img src={emon} alt="" />
              </div>
              <h4>Ekramul</h4>
            </div>
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <i class="text-3xl fa-solid fa-bars"></i>
            </label>
            <ul
              tabindex="0"
              class="menu py-2 navbar-end menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div class="navbar-end hidden w-full lg:flex">
          <ul class="menu w-full flex py-2 justify-end menu-horizontal p-0">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
