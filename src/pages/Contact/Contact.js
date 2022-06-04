import React, { useState } from "react";
import "./Contact.css";
import contact from "../../assets/images/contact1.webp";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (message) => {
    setIsLoading(true);
    (async () => {
      const { data } = await axios.post(
        "https://ekramul-hasan.herokuapp.com/email",
        message
      );
      if (data) {
        setIsLoading(false);
        swal(
          "Successful",
          "I Have Got Your Mail, I will get back to your soon.",
          "success",
          {
            className: "rounded-3xl",
          }
        );
        reset();
      }
      setIsLoading(false);
    })();
  };
  console.log(isLoading);

  return (
    <div id="contact" className="max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-base text-secondary uppercase">Contact</p>
        <p className="text-accent font-bold text-6xl mb-10">Contact With Me</p>
      </div>
      <div className="w-full flex justify-center gap-10">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="contact-card p-10 w-2/5 h-full text-left"
        >
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
        <div
          data-aos="fade-up-left"
          data-aos-duration="1500"
          className="contact-card p-10 w-3/5"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-8 flex gap-10">
              <div class="form-control w-full">
                <label class="label">Full Name</label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  class="input input-bordered w-full focus:border-secondary"
                />
                {errors?.name && (
                  <span class="error">{errors.name.message}</span>
                )}
              </div>

              <div class="form-control w-full">
                <label class="label">Contact Number</label>
                <input
                  {...register("phone")}
                  type="number"
                  class="input input-bordered w-full focus:border-secondary"
                />
              </div>
            </div>

            <div class="mb-8 form-control w-full">
              <label class="label">Email</label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                type="text"
                class="input input-bordered w-full focus:border-secondary"
              />
              {errors?.email && (
                <span class="error">{errors.email.message}</span>
              )}
            </div>

            <div class="mb-8 form-control w-full">
              <label class="label">Subject</label>
              <input
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Subject is required",
                  },
                })}
                type="text"
                class="input input-bordered w-full focus:border-secondary"
              />
              {errors?.subject && (
                <span class="error">{errors.subject.message}</span>
              )}
            </div>

            <div class="mb-8 form-control">
              <label class="label">Your Message</label>
              <textarea
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required",
                  },
                })}
                class="textarea textarea-bordered  focus:border-secondary h-36"
              ></textarea>
              {errors?.message && (
                <span class="error">{errors.message.message}</span>
              )}
            </div>

            <button
              className={`send-mail-button w-full ${
                isLoading ? "loading" : ""
              }`}
              type="submit"
            >
              <span> Send Mail</span> <i class="fa-solid fa-chevron-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
