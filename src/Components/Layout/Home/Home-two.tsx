import "./Home.css";
import { FaPhone } from "react-icons/fa";
import DarkLogo from "../../assets/Logos/DarkLogo.png";
import HeroImage from "../../assets/Images/HeroImage.png";

import Location from "../../assets/Gifs/Location.gif";
import Instagram from "../../assets/Gifs/Instagram.gif";
import Fingerprint from "../../assets/Gifs/Fingerprint.gif";

export default function Home(): JSX.Element {
  return (
    <section
      id="hero"
      className="h-[850px] w-[480px] mb-24 relative  md:w-full md:bg-orange-300 lg:bg-green-300  2xl:bg-white "
    >
      <header className="container p-3 mx-auto max-w-7xl md:w-full lg:w-full xl:max-w-9xl">
        <nav className="flex items-center justify-between font-serif text-gray-900 lg:px-2">
          {/* Logo */}
          <img
            src={DarkLogo}
            alt="image of a dark logo"
            className="h-12 cursor-pointer w-44 sm:w-50 sm:h-14 sm:-ml-4 contrast-100 brightness-100 xl:w-44 xl:h-12"
          />
          {/* MENU */}
          <div className="hidden h-10 p-2 pt-2 font-light xl:flex md:space-x-8 ">
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

        {/* Mobile Menu */}
        <div className=" absolute z-20 pt-24 md:-mt-2 md:pl-[60px] mx-auto mt-24 md:space-y-28 space-y-40 md:-mt-8 lg:font-black lg:w-[650px] xl:pl-16">
          <div className="space-y-14 md:space-y-12">
            <div className="flex flex-col lg:pl-0 ">
              <div className="-space-y-8 lg:-space-y-12 font-serif font-normal text-white text-[55px] md:text-black md:font-semibold md:text-[70px] md:-space-y-10 lg:text-[75px]">
                <h1>Bespoke</h1>
                <h1>Garments</h1>
              </div>

              <p className="text-[12px] w-[250px] text-left text-white leading-5 opacity-80 md:flex md:w-[330px] md:text-[11px] ">
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
      </header>
       <div className="absolute hidden md:flex xl:flex z-10 h-screen md:h-[560px] lg:h-[650px] md:right-8 -mt-16 md:top-10 md:mt-0 lg:right-10 lg:mt-0 xl:right-12 xl:h-[700px] xl:-mt-4">
        <img src={HeroImage} alt="Hero Image" className="contrast-125" />
      </div>
      <div
        className="absolute -rotate-90 -left-12 top-[230px]
       text-[135px] w-[780px] font-serif font-black pt-24 opacity-20 md:text-[100px] md:left-48 md:top-16 lg:left-56"
      >
        Tailor Made
      </div>
    </section>
  );
}
