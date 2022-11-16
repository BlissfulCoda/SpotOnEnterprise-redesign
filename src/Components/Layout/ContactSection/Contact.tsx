import { useState } from "react";

import Button from "../Shared/Button";

function Contact(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    let inputName = e.target as HTMLInputElement;
    console.log(inputName.value);
    setName(inputName.value);
  };

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    let inputEmail = e.target as HTMLInputElement;
    console.log(inputEmail.value);
    setEmail(inputEmail.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputMessage = e.target.value;
    console.log(inputMessage);
    setMessage(inputMessage);
  };

  return (
    <section
      id="contact"
      className="mb-24 space-y-3 snap-center section-container"
    >
      <h2>CONTACT</h2>
      <div className="relative flex flex-col p-4 mx-auto tablet:flex-row tablet:py-0 tablet:p-4 tablet:max-w-2xl tablet:min-h-[600px] laptop:max-w-4xl ">
        {/* FORM */}
        <form className="absolute z-10 w-11/12 px-5 py-10 space-y-6 bg-white shadow shadow-3xl tablet:w-80 tablet:absolute tablet:z-20 tablet:left-4 laptop:w-1/2 tablet:p-7">
          <h3 className="text-base text-center text-bgPurple">
            SEND A MESSAGE
          </h3>
          <div className="space-y-6 tablet:space-y-3">
            {/* NAME */}
            <div className="">
              <h5>Your Name</h5>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                className="block w-full px-2 py-2 mt-1 border rounded-sm rounded focus:outline-none"
              />
            </div>
            {/* email */}
            <div className="">
              <h5>Your Email</h5>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                className="block w-full px-2 py-2 mt-1 border rounded-sm rounded focus:outline-none dark:bg-black invalid:border-pink-500 invalid:text-pink-600 "
              />
            </div>
            {/* Contact */}
            <div className="">
              <h5>Your Message</h5>
              <textarea
                value={message}
                onChange={handleMessageChange}
                rows={5}
                className="block w-full px-2 py-2 mt-1 border rounded-sm rounded focus:outline-none"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="text-xs rounded-sm text-white shadow px-12 py-2 shadow-3xl cursor-pointer border-slate-400 bg-gradient-to-r from-[#E34CCE] to-[#E39B57] duration-500 border-none"
          >
            Send
          </Button>
        </form>
        {/* MAP */}
        <div className="relative pt-[400px] tablet:right-0 tablet:w-full tablet:pt-12 tablet:pl-48 opacity-100 laptop:border-red-400 tablet:opacity-100">
          {/* BOTTOM GRADIENT */}
          <div className="absolute bottom-0 left-0 right-0   top-[700px] gradient-bottom tablet:top-[600px] "></div>
          {/* RIGHT GRADIENT */}
          <div className="absolute bottom-0 top-0 right-0   left-80 tablet:left-[500px]  gradient-right opacity-70 "></div>
          {/* LEFT GRADIENT */}
          <div className="absolute top-0 bottom-0 left-0 right-96 tablet:right-80 gradient-left opacity-90"></div>
          <div className="absolute bottom-0 top-0 right-80   left-0 tablet:top-[500px]  gradient-left opacity-70 "></div>
          {/* GRADIENT TOP */}

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
