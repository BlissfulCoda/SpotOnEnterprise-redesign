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
      className="h-[850px] w-[480px] mb-24 relative  md:w-full md:bg-orange-300 lg:bg-green-300 xl:bg-blue-300 2xl:bg-white"
    >
      <div className="container max-w-7xl mx-auto p-3  sm:w-[560px] md:w-full xl:max-w-9xl">
        <nav className="flex items-center justify-between font-serif text-gray-900  lg:px-2">
          {/* Logo */}
          <img
            src={DarkLogo}
            alt="image of a dark logo"
            className="w-44 h-12 contrast-100 brightness-100 xl:w-44 xl:h-12 cursor-pointer"
          />
          {/* MENU */}
          <div className="hidden pt-2 p-2 h-10 font-light  xl:flex md:space-x-8 ">
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

        {/* Mobile Menu */}
        <div className=" absolute z-20 pt-24 pl-[88px] w-[460px] md:-mt-2 md:pl-[60px] mx-auto mt-24 md:space-y-28 space-y-40 md:-mt-8 lg:font-black lg:w-[650px] xl:pl-16">
          <div className="space-y-14 md:space-y-14">
            <div className="lg:pl-0 md:space-y-2 flex flex-col ">
              <div className="-space-y-8 font-serif font-normal text-white text-[55px] md:text-black md:font-semibold md:text-[65px] lg:text-[90px] md:-space-y-10 lg:-space-y-16 xl:text-9xl xl:-space-y-16">
                <h1>Bespoke</h1>
                <h1>Garments</h1>
              </div>

              <p className="text-[12px] w-[250px] text-left text-white leading-5 opacity-80 md:flex md:w-[300px] md:text-[10px]lg:font-serif lg:text-[16px] lg:leading-7 lg:font-thin lg:text-slate-800 lg:w-[450px] lg:text-zinc-600">
                We Specialise in producing bespoke, custom made garments for
                every special occasion, with the best customer service next to
                none.
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] text-[14px]  hover:scale-105 rounded-sm ml-4 py-3 px-20 text-white duration-500 md:ml-0 md:px-8 md:py-2 md:text-[8px] lg:px-14 lg:py-3 lg:opacity-100 drop-shadow-lg shadow-2xl font-serif font-light">
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
      </div>
       <div className="absolute hidden md:flex xl:flex z-10 h-screen md:h-[560px] md:right-8 -mt-16 md:top-10  md:mt-0 lg:right-10 lg:mt-0 xl:right-12 xl:h-[700px] xl:-mt-4">
        <img src={HeroImage} alt="Hero Image" className="contrast-125" />
      </div>
      <div
        className="absolute -rotate-90 -left-12 top-[130px]
       text-[115px] w-[780px] font-serif font-black pt-24 opacity-10 md:text-[100px] md:left-48 md:top-16 lg:text-[115px] lg:left-[400px] lg:top-[130px] xl:left-[450px] xl:text-[100px] "
      >
        Tailor Made
      </div>
    </section>
  );
}
