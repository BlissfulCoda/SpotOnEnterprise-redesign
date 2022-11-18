import { useContext } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import { FaPhone } from "react-icons/fa";
import HamburgeMenu from "../Shared/HamburgeMenu";
import MainSection from "./HomeComponents/MainSection";
import MobileMenu from "./HomeComponents/MobileMenu";

import { SpotOnEntepriseGifsAndLogos } from "../../../Data/ComponentData";

export default function Home(): JSX.Element {
  const { theme, checked } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  const { DarkLogo, LightLogo } = SpotOnEntepriseGifsAndLogos;

  return (
    <section id="hero" className="mb-24 change-transitions">
      <div className="relative h-screen py-5 section-container overflow-hidden h-[930px] tablet:h-[650px] laptop:h-[800px] laptop:p-4 desktop:p-6">
        <HamburgeMenu />
        {checked ? (
          <MobileMenu />
        ) : (
          <section className="duration-300 laptop:relative">
            {/* HEADER */}
            <header className="flex items-center justify-between font-serif biggest:px-6 laptop:z-20 laptop:-mt-2 laptop:px-0 laptop:absolute laptop:w-full ">
              {/* Logo */}

              <img
                src={theme ? DarkLogo : LightLogo}
                className="h-12 w-44 brightness-150 contrast-200 change-transitions"
                alt="SpotOnEnterprise Logo"
              />
              {/* MENU */}
              <nav className="hidden h-10 pt-2 text-sm font-medium laptop:flex laptop:space-x-7 desktop:space-x-8 laptop:px-6 ">
                <div className="duration-700 opacity-50 group hover:opacity-100">
                  <a href="#home" className="cursor-pointer">
                    Home
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-purple-300"></div>
                </div>
                <div className="duration-700 opacity-50 group hover:opacity-100">
                  <a href="#about" className="cursor-pointer">
                    About
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-purple-300"></div>
                </div>
                <div className="duration-700 opacity-50 group hover:opacity-100">
                  <a href="#work" className="cursor-pointer">
                    Work
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-purple-300"></div>
                </div>
                <div className="duration-700 opacity-50 group hover:opacity-100">
                  <a href="#testimonials" className="cursor-pointer">
                    Testimonials
                  </a>
                  <div className="mx-2 bg-green-500 group-hover:border-b group-hover:border-purple-300 "></div>
                </div>
                <div className="duration-700 opacity-50 group hover:opacity-100">
                  <a href="#contact" className="cursor-pointer">
                    Contact
                  </a>
                  <div className="mx-2 group-hover:border-b group-hover:border-purple-300 "></div>
                </div>
              </nav>
              {/* PHONE */}
              <div className="flex hidden pr-16 space-x-2 tablet:flex laptop:pr-0 tablet:border tablet:bg-transparent tablet:rounded-full tablet:py-4 dark:tablet:border-slate-600 tablet:px-4 tablet:pr-3 tablet:items-center tablet:justify-center laptop:pr-4">
                <FaPhone
                  size={18}
                  className="text-yellow-400 delay-500 animate-pulse"
                />
                <h4 className="text-sm text-bgPurple font-body ">
                  +(44) 753 823 6771
                </h4>
              </div>
            </header>

            {/* MAIN SECTION */}
            <MainSection />
          </section>
        )}
      </div>
    </section>
  );
}
