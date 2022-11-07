import { useState } from "react";
import {FaBell} from 'react-icons/fa'

import Button from "../Shared/Button";
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
      className=" relative h-screen px-3 py-3 section-container  overflow-hidden duration-500 h-[930px] tablet:h-[650px] laptop:h-[800px] laptop:px-0"
    >
      {/* HEADER */}
      <header className="flex items-center justify-between px-1 font-serif laptop:px-0 desktop:px-2 ">
        {/* Logo */}
        <img
          src={DarkLogo}
          alt="image of a dark logo"
          className="h-12 cursor-pointer w-44 contrast-100 brightness-150 "
        />
        {/* MENU */}
        <nav className="hidden h-10 pt-3 text-sm font-medium opacity-50 laptop:flex laptop:space-x-6 desktop:space-x-7 ">
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
        <div className="flex hidden pr-16 space-x-2 tablet:flex laptop:pr-0">
          <FaPhone
            size={18}
            className="text-yellow-400 delay-500 animate-pulse"
          />
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

      {/* MAIN SECTION */}
      <div className="container mx-auto ">
        <div className="absolute z-20 top-72 w-[460px] pl-7 sm:pl-16 tablet:pl-4 tablet:space-y-32 space-y-40 tablet:top-36 laptop:space-y-36 laptop:left-6 mx-10 desktop:left-10 ">
          <div className="space-y-20 text-white tablet:space-y-12 laptop:space-y-16 tablet:text-black " style={{}}>
            <div className="flex flex-col space-y-3 sm:px-4 tablet:px-0 tablet:space-y-0 sm:space-y-3 tablet:space-y-4 laptop:space-y-6">
              {/* BESPOKE GARMENTS */}
              <div
                className="max-w-xs font-serif text-[55px] font-medium leading-[50px] tablet:font-black tablet:text-7xl tablet:leading-[60px] laptop:text-8xl 
               laptop:leading-[75px]  desktop:text-[112px] desktop:leading-[90px] "
              >
                <h1>Bespoke Garments</h1>
              </div>

              <h4 className="tablet:flex text-[12px] w-3/5   font-light tablet:leading-4 tablet:opacity-50 tablet:flex tablet:w-2/3 text-justify tablet:text-[10.5px] laptop:w-[380px] laptop:leading-5 laptop:text-sm desktop:text-[15px] opacity-70 desktop:w-[440px] desktop:text-[16px] font-serif desktop:leading-6">
                We Specialise in producing bespoke, custom made garments for
                every special occasion, with the best customer service next to
                none.
              </h4>
            </div>

            {/* MOBILE BUTTON */}
            <Button className="text-xs tablet:hidden hover:scale-105 rounded-sm ml-4 py-3 px-20 duration-500 font-serif font-light tablet:ml-0 tablet:px-10 tablet:py-2 tablet:text-[10px] laptop:px-12 laptop:py-3 laptop:text-sm shadow shadow-3xl border border-slate-100 " type="button">
              Get in touch
            </Button>

            {/* LAPTOP BUTTONS */}
            <div className="flex flex-col hidden tablet:flex tablet:flex-row laptop:space-x-1 laptop:flex ">
              <Button type="button" className="px-10 py-3 laptop:px-12 font-serif text-xs text-white font-light duration-500 border border-none rounded-sm rounded-br-full shadow rounded-tr-3xl hover:scale-105 shadow-3xl cursor-pointer desktop:px-14 border-slate-100 bg-gradient-to-r from-[#E34CCE] to-[#E39B57]">
                Get in touch
              </Button>
              <Button type="button" className="flex gap-1 px-10 py-3 font-serif text-xs font-light duration-500 border border-none rounded-sm rounded-tl-full shadow cursor-pointer laptop:px-12 rounded-bl-3xl hover:scale-105 shadow-3xl desktop:px-14">
                View Collection
              </Button>
            </div>
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
          className="absolute z-10 h-[790px] -mt-10 duration-500 contrast-125 sm:absolute-none tablet:right-9 tablet:-mt-12 tablet:h-[600px] laptop:h-[730px] laptop:-mt-20 laptop:right-6 desktop:right-12 
          desktop:-mt-20 object-cover object-center"
        />

        <div
          className="absolute -rotate-90 -left-[72px] top-[230px] font-serif font-bold w-[800px] opacity-5 text-9xl sm:left-3 tablet:text-[105px] tablet:left-64 tablet:top-[100px] laptop:left-[510px] laptop:text-[125px] laptop:top-[205px]
        desktop:left-[620px] "
        >
          Tailor Made
        </div>
      </div>
    </section>
  );
}
