import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

import Button from "../Shared/Button";
import ErrorMessage from "./ErrorMessage";

import {
  validateEmail,
  validateUserName,
  validateMessage,
  validateButton,
} from "./Validation";

function Contact(): JSX.Element {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [nameText, setNameText] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<boolean>(false);
  const [formSubmit, setFormSubmit] = useState<boolean>(false);

  const nameRef = useRef<HTMLHeadingElement>(null);
  const emailRef = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLHeadingElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { userName, email, message } = formState;
    validateUserName({ userName, setNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });
    validateButton({ userName, email, message, setBtnDisabled });
  }, [formState.userName, formState.email, formState.message]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.currentTarget.name) {
      case "userName":
        if (
          e.currentTarget.value !== "" &&
          e.currentTarget.value.length >= 5 &&
          e.currentTarget.value.length < 40
        ) {
          setNameText(true);
        } else {
          setNameText(false);
        }
        break;
      case "message":
        if (
          e.currentTarget.value !== "" &&
          e.currentTarget.value.length >= 10 &&
          e.currentTarget.value.length <= 200
        ) {
          setMessageText(true);
        } else {
          setMessageText(false);
        }
        break;
    }

    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const resetFormLabel = (
    inputField: React.RefObject<HTMLHeadingElement>,
    opacity: string,
    transform: string,
    fontSize: string
  ) => {
    inputField.current!.style.opacity = opacity;
    inputField.current!.style.transform = transform;
    inputField.current!.style.fontSize = fontSize;
    inputField.current!.style.transition = "all 1s ease-in";
  };
  // HANDLE FORM SUBMIT
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { userName, email, message } = formState;

    const formDetails: { userName: string; email: string; message: string } = {
      userName,
      email,
      message,
    };
    toast.success("Your message was sent successfully");
    setFormState({ ...formState, userName: "", email: "", message: "" });
    resetFormLabel(nameRef, "0.6", "translateY(0)", "10px");
    resetFormLabel(emailRef, "0.6", "translateY(0)", "10px");
    resetFormLabel(messageRef, "0.6", "translateY(0)", "10px");
    setFormSubmit(true);
    setNameText(false);
    setMessageText(false);
  };

  const handleInputText = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.currentTarget.name) {
      case "userName":
        resetFormLabel(nameRef, "0.25", "translateY(-1ch)", "8px");
        break;
      case "email":
        resetFormLabel(emailRef, "0.25", "translateY(-1ch)", "8px");
        break;
      case "message":
        resetFormLabel(messageRef, "0.25", "translateY(-1ch)", "8px");
        break;
    }
  };

  const handleRemoveText = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.currentTarget.name) {
      case "userName":
        if (event.currentTarget.value.length <= 0) {
          resetFormLabel(nameRef, "0.6", "translateY(0)", "10px");
        }
        break;
      case "email":
        if (event.currentTarget.value.length <= 0) {
          resetFormLabel(emailRef, "0.6", "translateY(0)", "10px");
        }
        break;
      case "message":
        if (event.currentTarget.value.length <= 0) {
          resetFormLabel(messageRef, "0.6", "translateY(0)", "10px");
        }
        break;
    }
  };

  return (
    <section
      id="contact"
      className="space-y-3 outline-none mb-28 tablet:space-y-6 section-container"
    >
      <h2 data-aos="fade-zoom-in" data-aos-once="true">
        CONTACT
      </h2>
      <div className="relative flex flex-col p-4 mx-auto tablet:flex-row tablet:py-0 tablet:p-4 tablet:max-w-2xl tablet:min-h-[600px] laptop:max-w-5xl desktop:max-w-6xl laptop:px-32 sm:p-0 ">
        {/* FORM */}
        <form
          name="contact"
          data-netlify="true"
          data-aos="zoom-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-once="true"
          method="POST"
          action="/send"
          onSubmit={handleFormSubmit}
          className="absolute z-10 w-11/12 px-5 py-10 space-y-6 bg-white shadow shadow-xl tablet:w-80 tablet:absolute tablet:z-20 tablet:left-4 laptop:w-1/2 tablet:p-7 laptop:w-96 laptop:h-[500px] laptop:py-12 laptop:left-12 desktop:left-16 dark-color sm:w-full sm:py-12 dark:shadow-gray-100/5 border border-slate-100 dark:border-slate-900"
        >
          <h3 className="text-sm text-center opacity-90 ">SEND A MESSAGE</h3>
          <div className="space-y-7 tablet:space-y-3 ">
            {/* NAME */}
            <div>
              <h5 className={`form-input-title `} ref={nameRef}>
                Full Name
              </h5>
              <input
                min="5"
                max="40"
                id="name"
                name="userName"
                value={formState.userName}
                onChange={handleInputChange}
                onFocus={handleInputText}
                onBlur={handleRemoveText}
                type="text"
                ref={nameInputRef}
                className={`form-input out-of-range:border-red-500  ${
                  nameText
                    ? "focus:border-b-emerald-400 border-b-green-400  dark:focus:border-b-emerald-600 dark:border-b-emerald-600"
                    : formSubmit
                    ? "dark:border-b-slate-800 dark:focus:border-b-indigo-700"
                    : "dark:focus:border-b-indigo-700 dark:border-b-slate-800"
                }`}
              />
              {nameError && <ErrorMessage error={nameError} />}
            </div>

            {/* EMAIL */}
            <div>
              <h5 className=" form-input-title" ref={emailRef}>
                Email
              </h5>
              <input
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                onFocus={handleInputText}
                onBlur={handleRemoveText}
                type="email"
                className="form-input invalid:border-b-pink-500 dark:invalid:border-b-pink-500 invalid:text-pink-600 valid:text-emerald-600 valid:dark:focus:text-emerald-600"
              />
              {emailError && <ErrorMessage error={emailError} />}
            </div>

            {/* TEXTAREA */}
            <div>
              <h5 className="form-input-title" ref={messageRef}>
                Message
              </h5>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                onFocus={handleInputText}
                onBlur={handleRemoveText}
                rows={5}
                className={`form-input  ${
                  messageText
                    ? "dark:focus:border-b-emerald-600 dark:border-b-emerald-600"
                    : "dark:focus:border-b-indigo-700 "
                }`}
              />
              {messageError && <ErrorMessage error={messageError} />}
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className={!btnDisabled ? "gradient" : "secondary"}
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
          data-aos-once="true"
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
