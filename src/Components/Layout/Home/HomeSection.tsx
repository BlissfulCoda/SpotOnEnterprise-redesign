import { useContext, useState } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import { FaPhone } from "react-icons/fa";

import MainSection from "./HomeComponents/MainSection";
import MobileMenu from "./HomeComponents/MobileMenu";

import DarkLogo from "../../assets/Logos/DarkLogo.png";
import LightLogo from "../../assets/Logos/LightLogo.png";

export default function Home(): JSX.Element {
  const { toggleLogo } = useContext(DarkModeContext) as DarkModeDataInterface;

  const [checked, setChecked] = useState<boolean>(false);

  const handleMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <section id="hero" className=" change-transitions">
      <div className="relative h-screen px-2 py-3 section-container  overflow-hidden h-[930px] tablet:h-[650px] laptop:h-[800px] laptop:p-3 relative ">
        <label className="bg-gradient-to-r from-[#E34CCE] to-[#E39B57] border-none  right-0 z-30 text-white btn btn-circle swap swap-rotate laptop:hidden mr-4 shadow drop-shadow-xl absolute cursor-pointer top-5">
          <input type="checkbox" onChange={handleMenu} checked={checked} />
          <svg
            className={
              checked ? "fill-current swap-on" : "fill-current swap-off"
            }
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            {checked ? (
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            ) : (
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            )}
          </svg>
        </label>
        {checked ? (
          <MobileMenu />
        ) : (
          <section>
            {/* HEADER */}
            <header className="flex items-center justify-between px-2 pt-1 font-serif laptop:px-0 biggest:px-4 ">
              {/* Logo */}

              <img
                src={toggleLogo ? DarkLogo : LightLogo}
                className="h-12 w-44 brightness-150 contrast-200 change-transitions"
                alt="SpotOnEnterprise Logo"
              />
              {/* MENU */}
              <nav className="hidden h-10 pt-2 text-sm font-medium laptop:flex laptop:space-x-6 desktop:space-x-7 biggest:text-base">
                <div className="group">
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
                  <div className="mx-2 group-hover:border-b group-hover:border-strongPurple"></div>
                </div>
                <div className="group">
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
