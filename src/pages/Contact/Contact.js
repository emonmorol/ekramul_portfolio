import React from "react";
import "./Contact.css";
import contact from "../../assets/images/contact1.webp";

const Contact = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto">
      <p className="text-base text-secondary uppercase">Contact</p>
      <p className="text-accent font-bold text-6xl mb-10">Contact With Me</p>
      <div className="w-full flex justify-center gap-10">
        <div className="contact-card p-10 w-2/5 h-full text-left">
          <div className="contact-image rounded-2xl overflow-hidden mb-10">
            <img src={contact} alt="" />
          </div>
          <h3 className="text-3xl font-semibold text-accent my-4">
            Ekramul Hasan
          </h3>
          <p className="text-gray-500 text-lg">
            Mern Stack Developer
            <br />
            <br />
            I am available for freelance work. Connect with me via call or email
            me in to my account.
            <br />
            <br />
            Phone : <span className="text-accent ml-2">+8801614714959</span>
            <br />
            Email :
            <span className="text-accent ml-2">
              ekramulhasanmorol@gmail.com
            </span>
          </p>
          <div className="mt-5">
            <h5 className="text-gray-500 text-lg mb-3 uppercase tracking-wide">
              Find Me
            </h5>
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
        </div>
        <div className="contact-card p-10 w-3/5">
          <form className="">
            <div className="mb-8 flex gap-10">
              <div class="form-control w-full">
                <label class="label">Alt label</label>
                <input type="text" class="input input-bordered w-full" />
              </div>

              <div class="form-control w-full">
                <label class="label">Alt label</label>
                <input type="text" class="input input-bordered w-full" />
              </div>
            </div>

            <div class="mb-8 form-control w-full">
              <label class="label">Alt label</label>
              <input type="text" class="input input-bordered w-full" />
            </div>

            <div class="mb-8 form-control w-full">
              <label class="label">Alt label</label>
              <input type="text" class="input input-bordered w-full" />
            </div>

            <div class="mb-8 form-control">
              <label class="label">Alt label</label>
              <textarea class="textarea textarea-bordered h-36"></textarea>
            </div>

            <button className="send-mail-button w-full" type="submit">
              <span> Send Mail</span> <i class="fa-solid fa-chevron-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
