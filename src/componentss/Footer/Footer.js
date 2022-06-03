import React from "react";
import emon from "../../assets/images/emon_morol.png";

const Footer = () => {
  return (
    <div className="footer-content pb-10 -mt-10">
      <footer class="footer justify-center items-center gap-24 p-10 text-neutral-content max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img className=" bg-white" src={emon} alt="" />
            </div>
            <h2>Ekramul</h2>
          </div>
          <p className="text-gray-600">All Rights Reserved @ Ekramul Hasan</p>
        </div>
        <div>
          <span class="footer-title">Social</span>
          <div className="flex gap-5">
            <a
              href="https://github.com/emonmorol"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i class="fa-brands fa-github"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ekramul-hasan/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            <a
              href="https://www.facebook.com/ekramul.hasan.morol/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i class="fa-brands fa-facebook-f"></i>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
