import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

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
        <div class="navbar-start w-full">
          <div class="dropdown dropdown-end w-full flex justify-between ">
            <div class="avatar profile-image">
              <div class="w-14 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt=""
                />
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-end hidden w-full lg:flex">
          <ul class="menu py-2 justify-end w-full menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
