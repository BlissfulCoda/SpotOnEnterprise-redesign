import React, { useState } from "react";

import Button from "../Shared/Button";

function Contact(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputName: string = e.target.value;
    setName(inputName);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputEmail: string = e.target.value;
    setEmail(inputEmail);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputMessage: string = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newDetails: { name: string; email: string; message: string } = {
      name,
      email,
      message,
    };
    console.log(newDetails);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="mb-24 space-y-3 outline-none tablet:space-y-6 section-container"
    >
      <h2>CONTACT</h2>
      <div className="relative flex flex-col p-4 mx-auto tablet:flex-row tablet:py-0 tablet:p-4 tablet:max-w-2xl tablet:min-h-[600px] laptop:max-w-5xl desktop:max-w-6xl laptop:px-32 sm:p-0 ">
        {/* FORM */}
        <form
          method="POST"
          action="/send"
          onSubmit={handleSubmit}
          className="absolute z-10 w-11/12 px-5 py-10 space-y-6 bg-white shadow shadow-3xl tablet:w-80 tablet:absolute tablet:z-20 tablet:left-4 laptop:w-1/2 tablet:p-7 laptop:w-96 laptop:h-[500px] laptop:py-12 laptop:left-12 desktop:left-16 dark-color sm:w-full sm:py-12 dark:shadow-gray-100/10 "
        >
          <h3 className="text-sm text-center opacity-70">
            <span className="opacity-80"> Have an event in mind? </span>{" "}
            <span className="text-bgPurple">Let's talk now</span>
          </h3>
          <div className="space-y-6 tablet:space-y-3 ">
            {/* NAME */}
            <div className="">
              <h5 className="form-input-title">Your Name</h5>
              <input
                name="name"
                value={name}
                onChange={handleNameChange}
                type="text"
                className="block w-full px-2 py-2 mt-1 border rounded-sm rounded focus:outline-none dark-color dark:border-slate-600 in-range:border-green-500 out-of-range:border-red-500 "
                min="2"
                max="5"
              />
            </div>
            {/* email */}
            <div>
              <h5 className="form-input-title">Your Email</h5>
              <input
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                type="email"
                className="block w-full px-2 py-2 mt-1 border rounded-sm rounded focus:outline-none invalid:border-pink-500 invalid:text-pink-600 valid:text-green-600 dark-color dark:border-slate-600 "
              />
            </div>
            {/* Contact */}
            <div>
              <h5 className="form-input-title">Your Message</h5>
              <textarea
                name="message"
                value={message}
                onChange={handleMessageChange}
                rows={4}
                className="block w-full px-2 py-2 mt-1 border rounded-sm rounded focus:outline-none dark-color dark:border-slate-600 "
              />
            </div>
            <Button
              type="submit"
              className="text-xs rounded-sm text-white shadow px-12 py-2 shadow-3xl cursor-pointer border-slate-400 bg-gradient-to-r from-[#E34CCE] to-[#E39B57] duration-500 border-none"
            >
              Send
            </Button>
          </div>
        </form>
        {/* MAP */}
        <div className="relative pt-[400px] tablet:right-0 tablet:w-full tablet:pt-12 tablet:pl-48 bg-opacity-100  tablet:bg-opacity-100 dark-color ">
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
