import "./Home.css";
import { FaPhone } from "react-icons/fa";
import DarkLogo from "../../assets/Logos/DarkLogo.png";
import LightLogo from "../../assets/Logos/LightLogo.png";
import HeroImage from "../../assets/Images/HeroImage.png";

import Location from "../../assets/Gifs/Location.gif";
import Instagram from "../../assets/Gifs/Instagram.gif";
import Fingerprint from "../../assets/Gifs/Fingerprint.gif";

export default function Home(): JSX.Element {
  return (
    <section
      id="hero"
      className="relative h-screen p-3 mb-24 overflow-hidden bg-white dark"
    >
      <header className="container ">
        <nav className="flex items-center justify-between font-serif text-white text-gray-900">
          {/* Logo */}
          <img
            src={DarkLogo}
            alt="image of a dark logo"
            className="h-12 cursor-pointer w-44 contrast-100 brightness-150"
          />

          {/* MENU */}
          <div className="hidden h-10 p-2 pt-2 xl:flex md:space-x-8">
            <div className="group ">
              <a href="#" className="text-xs cursor-pointer opacity-60">
                Home
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="text-xs cursor-pointer opacity-60">
                About
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="text-xs cursor-pointer opacity-60">
                Work
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="text-xs cursor-pointer opacity-60">
                Testimonials
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="text-xs cursor-pointer opacity-60">
                Contact
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
          </div>
          <div className="flex hidden pt-3 space-x-2 md:flex lg:flex">
            <FaPhone className="text-yellow-400 " />
            <h4 className="text-xs text-bgPurple font-body">
              +(44) 753 823 6771
            </h4>
          </div>
          {/* Hamberger Button */}
        </nav>

        <div className=" absolute z-20 pt-28 sm:pt-20 pl-[70px] w-[460px] sm:pl-[120px] md:-mt-2 md:pl-[60px] mx-auto mt-24 md:space-y-28 space-y-40 md:-mt-8 lg:font-black lg:w-[650px] xl:pl-16">
          <div className="space-y-14 md:space-y-12">
            <div className="flex flex-col lg:pl-0">
              <div className="-space-y-8 font-serif font-normal text-white text-[55px] sm:text-[50px]  md:text-black md:font-semibold md:text-[70px] md:-space-y-10 lg:text-[75px] lg:-space-y-12">
                <h1>Bespoke</h1>
                <h1>Garments</h1>
              </div>

              <p className="text-[12px] sm:text-[10px] w-[250px] text-left text-white leading-5 opacity-80 md:flex md:w-[330px] md:text-[11px] ">
                We Specialise in producing bespoke, custom made garments for
                every special occasion, with the best customer service next to
                none.
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] text-[14px]  hover:scale-105 rounded-sm ml-4 py-3 px-20 text-white duration-500 drop-shadow-lg shadow-2xl font-serif font-light md:ml-0 md:px-8 md:py-2 md:text-[8px] lg:px-12 lg:py-3  ">
              Get in touch
            </button>
          </div>
          {/* Social Media */}
          <div className="flex hidden space-x-2 md:flex md:pl-0 lg:flex ">
            <img src={Instagram} alt="" className="w-5 h-5 cursor-pointer" />
            <img src={Location} alt="" className="w-5 h-5 cursor-pointer" />
            <img src={Fingerprint} alt="" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <img
          id="hero-image"
          src={HeroImage}
          alt="Hero Image"
          className="contrast-125 -mt-6 h-[780px] sm:h-[760px] sm:-mt-10 object-cover absolute z-10 md:right-10 "
        />
      </header>
      {/* Mobile Menu */}

      <div
        className="absolute -rotate-90 -left-16 top-[280px] font-serif font-black opacity-20 
       text-[135px] w-[780px] sm:text-[125px] sm:top-[230px] sm:-left-2"
      >
        Tailor Made
      </div>
    </section>
  );
}
