import { useContext } from "react";
import { FaPhone } from "react-icons/fa";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import HamburgeMenu from "../Shared/HamburgeMenu";

import MainSection from "./HomeComponents/MainSection";
import MobileMenu from "./HomeComponents/MobileMenu";

import DarkLogo from "../../assets/Logos/DarkLogo.png";
import LightLogo from "../../assets/Logos/LightLogo.png";

export default function Home(): JSX.Element {
  const { toggleLogo, checked} = useContext(DarkModeContext) as DarkModeDataInterface;


  return (
    <section id="hero" className=" change-transitions">
      <div className="relative h-screen px-2 py-3 section-container  overflow-hidden h-[930px] tablet:h-[650px] laptop:h-[800px] laptop:p-3 relative ">
        <HamburgeMenu />
        {checked ? (
          <MobileMenu />
        ) : (
          <section className="laptop:relative">
            {/* HEADER */}
            <header className="flex items-center justify-between px-2 pt-1 font-serif biggest:px-4 laptop:z-10 laptop:-mt-2 laptop:px-0">
              {/* Logo */}

              <img
                src={toggleLogo ? DarkLogo : LightLogo}
                className="h-12 w-44 brightness-150 contrast-200 change-transitions"
                alt="SpotOnEnterprise Logo"
              />
              {/* MENU */}
              <nav className="hidden h-10 pt-2 text-sm font-medium laptop:flex laptop:space-x-6 desktop:space-x-7 biggest:text-base laptop:px-6 laptop:">
                <div className="group ">
                  <a href="#home" className="cursor-pointer">
                    Home
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
                </div>
                <div className="group">
                  <a href="#about" className="cursor-pointer">
                    About
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
                </div>
                <div className="group">
                  <a href="#work" className="cursor-pointer">
                    Work
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
                </div>
                <div className="group">
                  <a href="#testimonials" className="cursor-pointer">
                    Testimonials
                  </a>
                  <div className="mx-2 bg-green-500 group-hover:border-b group-hover:border-strongPurple "></div>
                </div>
                <div className="group laptop:obsolute">
                  <a href="#contact" className="cursor-pointer">
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
                <h4 className="text-sm text-bgPurple font-body ">
                  +(44) 753 823 6771
                </h4>
              </div>
              {/* Hamberger Button */}
            </header>

            {/* MAIN SECTION */}
            <MainSection />
          </section>
        )}
      </div>
    </section>
  );
}
