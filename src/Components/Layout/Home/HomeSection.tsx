import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import Nav from "../Shared/Nav";

import { FaPhone } from "react-icons/fa";
import HamburgeMenu from "../Shared/HamburgeMenu";
import MainSection from "./HomeComponents/MainSection";
import MobileMenu from "./HomeComponents/MobileMenu";

import { SpotOnEntepriseGifsAndLogos } from "../../../Data/ComponentData";

import { Animations } from "../Shared/Animation";

export default function Home(): JSX.Element {
  const { theme, checked} = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  const { DarkLogo, LightLogo} =
    SpotOnEntepriseGifsAndLogos;

    // STATE
    const [showHamburgMenu, setShowHamburgMenu] = useState<boolean>(false);

  //  ANIMATIONS

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="home"
      className="px-2 tablet:mb-28 change-transitions"
    >
      <div className="relative h-screen py-5 section-container overflow-hidden h-[930px] tablet:h-[650px] laptop:h-[800px] laptop:p-4 desktop:p-6">
        {checked ? (
          <MobileMenu />
        ) : (
          <section className=" laptop:relative">
            {/* HEADER */}
            <header className="flex items-center justify-between font-serif biggest:px-6 laptop:z-20 laptop:-mt-2 laptop:px-0 laptop:absolute laptop:w-full ">
              {/* Logo */}
              <motion.img
                variants={Animations.FadeLogo}
                onAnimationComplete={() => setShowHamburgMenu(true)}
                src={theme ? DarkLogo : LightLogo}
                className="w-40 h-12 duration-500 brightness-150 contrast-200 change-transitions"
                alt="SpotOnEnterprise Logo"
              />

              {/* MENU */}
              <Nav />

              {/* PHONE */}
              <motion.div
                variants={Animations.Phone}
                className="flex hidden pr-40 space-x-2 tablet:flex laptop:pr-0 laptop:border tablet:bg-transparent tablet:rounded-full tablet:py-4 dark:laptop:border-slate-700 laptop:px-4 laptop:pr-3 laptop:items-center laptop:justify-center laptop:pr-4 "
              >
                {/* PHONE */}
                <FaPhone
                  size={18}
                  className="text-yellow-400 delay-500 animate-pulse"
                />
                <h4 className="text-sm duration-500 text-bgPurple font-body">
                  +(44) 753 823 6771
                </h4>
              </motion.div>
            </header>

            {/* MAIN SECTION */}
            <MainSection />
          </section>
        )}

        {/* HAMBURG MENU */}
        {showHamburgMenu && <HamburgeMenu />}
      </div>
    </motion.section>
  );
}
