import { useState } from "react";

import "./Home.css";
import { FaPhone } from "react-icons/fa";
import DarkLogo from "../../assets/Logos/DarkLogo.png";
import LightLogo from "../../assets/Logos/LightLogo.png";
import HeroImage from "../../assets/Images/HeroImage.png";

import Location from "../../assets/Gifs/Location.gif";
import Instagram from "../../assets/Gifs/Instagram.gif";
import Fingerprint from "../../assets/Gifs/Fingerprint.gif";

export default function Home(): JSX.Element {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const handleMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(123);
  };
  return (
    <section
      id="hero"
      className="container relative h-screen px-2 py-2 mx-auto mb-20 overflow-hidden duration-500 max-w-7xl "
    >
      {/* HEADER */}
      <header className="flex items-center justify-between font-serif laptop:px-8">
        {/* Logo */}
        <img
          src={DarkLogo}
          alt="image of a dark logo"
          className="h-12 cursor-pointer w-44 contrast-100 brightness-150 laptop:h-14 laptop:w-48"
        />
        {/* MENU */}
        <nav className="hidden h-10 pt-3 text-sm font-normal opacity-80 laptop:flex tablet:space-x-8 desktop:space-x-9">
          <div className="group">
            <a href="#" className="cursor-pointer">
              Home
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
          </div>
          <div className="group">
            <a href="#" className="cursor-pointer">
              About
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
          </div>
          <div className="group">
            <a href="#" className="cursor-pointer">
              Work
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
          </div>
          <div className="group">
            <a href="#" className="cursor-pointer">
              Testimonials
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
          </div>
          <div className="group">
            <a href="#" className="cursor-pointer">
              Contact
            </a>
            <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
          </div>
        </nav>
        {/* PHONE */}
        <div className="flex hidden pt-0 pr-10 space-x-2 tablet:flex laptop:pl-12">
          <FaPhone size={13} className="text-yellow-400 " />
          <h4 className="text-sm text-bgPurple font-body tablet:font-black ">
            +(44) 753 823 6771
          </h4>
        </div>

        {/* Hamberger Button */}
        <label className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] border-none absolute right-0 z-30 text-white btn btn-circle swap swap-rotate laptop:hidden mr-4 shadow drop-shadow-xl">
          <input type="checkbox" onClick={handleMenu} />
          <svg
            className="fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </header>

      {/* HEADING TITLE */}
      <div className="container mx-auto laptop:px-6">
        <div className="absolute z-20 top-72 w-[460px] sm:pl-12 tablet:pl-4 tablet:space-y-28 space-y-40 tablet:left-6 tablet:-mt-32 laptop:space-y-36 laptop:left-16 mx-12 desktop:left-16 ">
          <div className="space-y-24 text-white tablet:space-y-10 laptop:space-y-12 tablet:text-black ">
            <div className="flex flex-col space-y-4 sm:px-6 tablet:px-0 tablet:space-y-6 laptop:space-y-6">
              <div className="font-serif text-6xl font-medium tablet:font-bold tablet:text-[84px] tablet:-space-y-3 laptop:text-8xl desktop:text-[105px] desktop:-space-y-5 desktop:tracking-wide">
                <h1>Bespoke</h1>
                <h1>Garments</h1>
              </div>

              <p className="hidden tablet:flex text-[12px] w-[250px] font-medium tablet:leading-5 opacity-80 tablet:flex tablet:w-3/4 tablet:text-justify tablet:text-xs laptop:w-[400px] laptop:leading-6 laptop:text-sm opacity-50 desktop:w-[460px] desktop:text-[16px] font-serif">
                We Specialise in producing bespoke, custom made garments for
                every special occasion, with the best customer service next to
                none.
              </p>
              <p className="w-3/5 text-xs leading-6 text-white opacity-80 tablet:hidden">
                We specialise in helping you find the right fit for every
                special occasion
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] text-xs  hover:scale-105 rounded-sm ml-4 py-3 px-16 text-white duration-500 drop-shadow-laptop shadow-2xl font-serif font-light tablet:ml-0 tablet:px-10 tablet:py-2 tablet:text-[10px] laptop:px-12 laptop:py-3 laptop:text-sm shadow-2xl">
              Get in touch
            </button>
          </div>
          {/* Social Media */}
          <div className="flex hidden w-5 h-5 space-x-2 tablet:flex tablet:pl-0 laptop:flex ">
            <img src={Instagram} alt="" className="cursor-pointer " />
            <img src={Location} alt="" className="cursor-pointer " />
            <img src={Fingerprint} alt="" className="cursor-pointer " />
          </div>
        </div>

        {/* HERO-IMAGE */}
        <img
          id="hero-image"
          src={HeroImage}
          alt="Hero Image"
          className="absolute z-10 h-screen -mt-12 duration-500 contrast-125 sm:absolute-none sm:h-full tablet:right-6 tablet:-mt-12 tablet:h-[650px] laptop:h-[750px] laptop:-mt-20 laptop:right-16 desktop:right-36 object-cover"
        />

        <div className="absolute -rotate-90 -left-[72px] top-72 font-serif font-bold w-[800px] opacity-5 text-[140px] sm:text-9xl sm:left-3 tablet:text-[110px] tablet:left-[300px] tablet:top-[180px] laptop:left-2/4 laptop:text-[125px] laptop:top-[250px]">
          Tailor Made
        </div>
      </div>
    </section>
  );
}
