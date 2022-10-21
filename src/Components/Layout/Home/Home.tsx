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
      className="h-[850px] w-[480px] mb-24 relative   md:bg-green-300 md:w-full lg:bg-yellow-300 xl:bg-white "
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
        <div className=" absolute z-20 pt-24 pl-[88px] w-[460px] md:-mt-2 md:pl-[30px] mx-auto mt-24 space-y-40 md:-mt-8 lg:font-black lg:w-[650px] xl:pl-16">
          <div className="space-y-14">
            <div className="lg:pl-0 space-y-0 flex flex-col ">
              <div className="-space-y-8 font-serif font-normal text-white text-[55px] md:text-black md:font-semibold md:text-[80px] lg:text-[95px] md:-space-y-12 lg:-space-y-16 xl:text-9xl xl:-space-y-16">
                <h1>Bespoke</h1>
                <h1>Garments</h1>
              </div>

              <p className="text-[12px] w-[250px] text-left text-white leading-5 opacity-80 md:flex md:w-[370px] lg:font-serif lg:text-[16px] lg:leading-7 lg:font-thin lg:text-slate-800 lg:w-[450px] lg:text-zinc-600">
                We Specialise in producing bespoke, custom made garments for
                every special occasion, with the best customer service next to
                none.
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] text-[14px]  hover:scale-105 rounded-sm ml-4 py-3 px-20 text-white duration-500 md:ml-0 md:px-16 md:px-12 md:text-[12px] lg:px-14 lg:py-3 lg:opacity-100 drop-shadow-lg shadow-2xl font-serif font-light">
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
       <div className="absolute hidden md:flex xl:flex z-10 h-screen -mt-16 md:top-0 md:right-0 md:-mt-4 xl:right-40 xl:h-[900px] xl:-mt-8">
        <img src={HeroImage} alt="Hero Image" className="contrast-125" />
      </div>
      <div
        className="absolute -rotate-90 -left-12 bottom-96
       text-[125px] lg:text-[135px] w-[780px] md:text-[120px] md:left-96 md:bottom-[410px] font-serif font-black pt-24 opacity-5 lg:w-[1000px] xl:left-[610px] xl:bottom-[430px]"
      >
        Tailor Made
      </div>
    </section>
  );
}
