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
      className="h-screen mb-24 relative dark bg-darkBackground p-3"
    >
      <header className="container w-full ">
        <nav className="flex items-center justify-between font-serif text-gray-900 text-white">
          {/* Logo */}
          <img
            src={LightLogo}
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
        <div className="absolute md:flex xl:flex z-10 h-screen -mt-16 ">
        <img src={HeroImage} alt="Hero Image" className="contrast-125" />
      </div>
      </header>
    </section>
  );
}
