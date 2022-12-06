import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Button from "../Shared/Button";
import ErrorMessage from "./ErrorMessage";

import { validateEmail, validateUserName, validateMessage } from "./Validation";

function Contact(): JSX.Element {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  useEffect(() => {
    const { userName, email, message } = formState;
    validateUserName({ userName, setNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });
  }, [formState.userName, formState.email, formState.message]);

  
  // HANDLE FORM INPUTS
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.success("Form submitted!");
    setFormState({ ...formState, userName: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="space-y-3 outline-none mb-28 tablet:space-y-6 section-container"
    >
      <h2 data-aos="fade-zoom-in">CONTACT</h2>
      <div className="relative flex flex-col p-4 mx-auto tablet:flex-row tablet:py-0 tablet:p-4 tablet:max-w-2xl tablet:min-h-[600px] laptop:max-w-5xl desktop:max-w-6xl laptop:px-32 sm:p-0 ">
        {/* FORM */}
        <form
          autoComplete="off"
          data-aos="zoom-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          method="POST"
          action="/send"
          onSubmit={handleFormSubmit}
          className="absolute z-10 w-11/12 px-5 py-10 space-y-6 bg-white shadow shadow-3xl tablet:w-80 tablet:absolute tablet:z-20 tablet:left-4 laptop:w-1/2 tablet:p-7 laptop:w-96 laptop:h-[500px] laptop:py-12 laptop:left-12 desktop:left-16 dark-color sm:w-full sm:py-12 dark:shadow-gray-100/10 "
        >
          <h3 className="text-sm text-center opacity-70 ">
            <span className="opacity-80"> Have an event in mind? </span>{" "}
            <span className="text-bgPurple">Let's talk now</span>
          </h3>
          <div className="space-y-6 tablet:space-y-3 ">
            {/* NAME */}
            <div>
              <h5 className="form-input-title">Full Name</h5>
              <input
                id="name"
                name="userName"
                value={formState.userName}
                onChange={handleInputChange}
                type="text"
                className="form-input"
              />
              {nameError && <ErrorMessage error={nameError} />}
            </div>

            {/* email */}
            <div>
              <h5 className="form-input-title">Email</h5>
              <input
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                type="email"
                className="form-input invalid:border-pink-500 invalid:text-pink-600 valid:text-green-600 dark:border-slate-600"
              />
              {emailError && <ErrorMessage error={emailError} />}
            </div>

            {/* Contact */}
            <div>
              <h5 className="form-input-title">Message</h5>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={6}
                className="block w-full px-2 py-2 mt-1 text-xs bg-white border rounded-sm rounded focus:outline-none dark-color dark:border-slate-600"
              />
              {messageError && <ErrorMessage error={messageError} />}
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className="secondary"
              isDisabled={btnDisabled}
            >
              Send
            </Button>
          </div>
        </form>
        {/* MAP */}
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          className="relative pt-[400px] tablet:right-0 tablet:w-full tablet:pt-12 tablet:pl-48 bg-opacity-100  tablet:bg-opacity-100 dark-color "
        >
          {/* BOTTOM GRADIENT */}
          <div className="absolute bottom-0 left-0 right-0 top-[700px] gradient-bottom  tablet:top-[400px] tablet:opacity-100 bg-opacity-100 "></div>

          {/* GRADIENT TOP */}
          <div className="absolute hidden tablet:flex bottom-80 top-0 right-0 left-0 tablet:bottom-[350px]  gradient-top bg-opacity-100 laptop:bottom-[400px] "></div>

          {/* RIGHT GRADIENT */}
          <div className="absolute bottom-0 top-0 right-0  opacity-100 left-72 tablet:left-[500px]  gradient-right bg-opacity-70 tablet:opacity-90  laptop:left-[700px]"></div>

          {/* LEFT GRADIENT */}
          <div className="absolute top-0 bottom-0 left-0 bg-opacity-100 right-72 tablet:right-80 gradient-left laptop:right-[590px]"></div>

          <iframe
            className="border-none h-[400px] w-full tablet:h-full tablet:rounded tablet:rounded-tr-3xl tablet:rounded-bl-3xl "
            src="https://snazzymaps.com/embed/439425"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
