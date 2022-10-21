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
      className="h-screen mb-24 relative bg-white overflow-hidden p-3"
    >
      <header className="container max-w-3xl">
        <nav className="flex items-center justify-between font-serif text-gray-900 text-white">
          {/* Logo */}
          <img
            src={DarkLogo}
            alt="image of a dark logo"
            className="w-44 h-12 contrast-100 brightness-150 cursor-pointer"
          />
          {/* MENU */}
          <div className="hidden pt-2 p-2 h-10 xl:flex md:space-x-8">
            <div className="group ">
              <a href="#" className="cursor-pointer text-xs opacity-60">
                Home
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="cursor-pointer text-xs opacity-60">
                About
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="cursor-pointer text-xs opacity-60">
                Work
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="cursor-pointer text-xs opacity-60">
                Testimonials
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
            <div className="group">
              <a href="#" className="cursor-pointer text-xs opacity-60">
                Contact
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
            </div>
          </div>
          <div className="hidden md:flex lg:flex pt-3 flex space-x-2">
            <FaPhone className="text-yellow-400 " />
            <h4 className="text-bgPurple text-xs font-body">
              +(44) 753 823 6771
            </h4>
          </div>
          {/* Hamberger Button */}
        </nav>
        <img src={HeroImage} alt="Hero Image" className="contrast-125 h-[750px] object-cover absolute z-20" />
      </header>
       {/* Mobile Menu */}
        <div className=" absolute z-20 pt-28 pl-[70px] w-[460px] md:-mt-2 md:pl-[60px] mx-auto mt-24 md:space-y-28 space-y-40 md:-mt-8 lg:font-black lg:w-[650px] xl:pl-16">
          <div className="space-y-14 md:space-y-12">
            <div className="lg:pl-0 flex flex-col">
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
          <div className="hidden md:flex md:pl-0 lg:flex flex space-x-2 ">
            <img src={Instagram} alt="" className="w-5 h-5 cursor-pointer" />
            <img src={Location} alt="" className="w-5 h-5 cursor-pointer" />
            <img src={Fingerprint} alt="" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      <div
        className="absolute -rotate-90 -left-20 top-[280px]
       text-[135px] w-[780px] font-serif font-black  opacity-40"
      >
        Tailor Made
      </div>
    </section>
  );
}
