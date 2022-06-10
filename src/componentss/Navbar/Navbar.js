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
            <div className="avatar w-full px-4 flex items-center justify-between lg:justify-start">
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
                <Link smooth to="/about-me">
                  About Me
                </Link>
              </li>
              <li>
                <Link smooth to="/blogs">
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
      <div className="block relative lg:hidden z-[1000]">
        <nav class="fixed bottom-0 inset-x-0 bottom-navigation rounded-tl-2xl rounded-tr-2xl grid grid-cols-7 text-[8px] px-4 text-white font-extralight font-poppins">
          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/landing#home"
          >
            <span>
              {" "}
              <i class="text-xl fa-solid fa-house"></i>
            </span>
            <span>Home</span>
          </Link>

          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/landing#services"
          >
            <span>
              {" "}
              <i class="text-xl fa-solid fa-code"></i>
            </span>
            <span>Services</span>
          </Link>

          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/landing#portfolio"
          >
            <span>
              {" "}
              <i class="text-xl fa-solid fa-bars-progress"></i>
            </span>
            <span>Portfolio</span>
          </Link>

          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/landing#resume"
          >
            <span>
              {" "}
              <i class="text-xl fa-solid fa-folder"></i>
            </span>
            <span>Resume</span>
          </Link>

          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/about-me"
          >
            <span>
              {" "}
              <i class="text-xl fa-solid fa-user"></i>
            </span>
            <span>About</span>
          </Link>
          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/blogs"
          >
            <span>
              {" "}
              <i class="text-xl fa-brands fa-blogger-b"></i>
            </span>
            <span>Blogs</span>
          </Link>
          <Link
            className="flex flex-col items-center mx-auto px-3 py-3"
            smooth
            to="/landing#contact"
          >
            <span>
              {" "}
              <i class="text-xl fa-solid fa-envelope"></i>
            </span>
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
