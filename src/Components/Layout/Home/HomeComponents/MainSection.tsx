import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { DarkModeDataInterface } from "../../../../Data/DarkModeData";
import {
  SpotOnEntepriseContact,
  SpotOnEntepriseGifsAndLogos,
} from "../../../../Data/ComponentData";
import DarkModeContext from "../../../../Context/DarkModeContext";
import { Animations } from "../../Shared/Animation";

import BespokeGarmentsDesktop from "../../Shared/BespokeGarmentsDesktop";
import BespokeGarmentsMobile from "../../Shared/BespokeGarmentsMobile";
import MainImage from "./MainImage";
import TailorMade from "../../Shared/TailorMade";

export default function MainSection(): JSX.Element {
  const { gif, handleChange } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  const { SPOTONENTERPRISE_INSTAGRAM, SPOTONENTERPRISE_LOCATION } =
    SpotOnEntepriseContact;

  const { Night, Instagram, Location, FingerPrint } =
    SpotOnEntepriseGifsAndLogos;

  // State
  const [showImage, setShowImage] = useState<boolean>(false);

  return (
    <div className="container mx-auto ">
      <div className="absolute z-20 top-[260px] w-[460px] pl-12 sm:pl-16 tablet:pl-4 tablet:space-y-32 space-y-40 tablet:top-28 laptop:space-y-40 laptop:left-14 mx-10 desktop:left-14 biggest:left-20">
        <div className="space-y-20 tablet:space-y-12 laptop:space-y-10 ">
          <motion.div
            variants={Animations.container}
            className="flex flex-col space-y-3 sm:px-4 tablet:px-0 sm:space-y-3 tablet:space-y-6 laptop:space-y-12"
          >
            {/* SMALL - white: small - screen */}
            <BespokeGarmentsMobile
              styling="tablet:hidden text-white max-w-xs font-serif text-5xl font-semibold leading-7"
              title="Bespoke Garments"
            />

            {/*  SMALL - screen */}
            <motion.p
              variants={Animations.mobileTitle}
              className="text-white pt-2 tablet:hidden tablet:flex font-serif tracking-tighter w-[190px] leading-4 opacity-40"
            >
              We Specialise in producing bespoke, custom made garments for every
              special occasion, with the best customer service next to none.
            </motion.p>

            {/* LARGE - black: large - screen */}
            <BespokeGarmentsDesktop
              styling="hidden max-w-xs tablet:flex font-serif text-[55px] font-medium tablet:font-black tablet:text-7xl text-black dark:text-white tablet:leading-[30px] 
              laptop:text-8xl  
              laptop:leading-7 desktop:text-[115px] desktop:leading-[45px] duration-500"
              title="Bespoke Garments"
            />

            {/* LARGE - screen */}
            <motion.p
              variants={Animations.subtitle}
              className="hidden tablet:flex font-light tablet:leading-4 tablet:flex tablet:w-3/4 text-justify  laptop:w-[390px] laptop:leading-5  desktop:w-[450px] desktop:text-base font-serif desktop:leading-6 biggest:w-[450px]
              biggest:text-base duration-500"
            >
              We Specialise in producing bespoke, custom made garments for every
              special occasion, with the best customer service next to none.
            </motion.p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={Animations.buttons}
            className="flex tablet:flex-row laptop:space-x-2 laptop:flex sm:pl-4 tablet:pl-0"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#contact"
              type="button"
              className="button tablet:text-xs text-white rounded-br-full shadow rounded-tr-3xl shadow-3xl cursor-pointer border-slate-400 bg-gradient-to-r from-[#E34CCE] to-[#E39B57] duration-500 border-none"
            >
              Get in touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#work"
              type="button"
              className="duration-500 bg-white rounded-tl-full shadow cursor-pointer button tablet:text-xs rounded-bl-3xl shadow-3xl dark:shadow-gray-100/10 dark-color dark:border-slate-300 dark:bg-transparent"
            >
              <span className="animate-pulse laptop:animate-none">
                View Collection
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          onAnimationComplete={() => setShowImage(true)}
          variants={Animations.socials}
          className="flex justify-between hidden w-24 space-x-2 tablet:flex tablet:pl-0 laptop:flex "
        >
          <a
            href={SPOTONENTERPRISE_INSTAGRAM}
            className="w-6 h-6 "
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="cursor-pointer " />
          </a>
          <a
            href={SPOTONENTERPRISE_LOCATION}
            className="w-6 h-6"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Location} alt="Location" className="cursor-pointer " />
          </a>
          <span className="w-6 h-6" onClick={handleChange}>
            <img
              src={gif ? FingerPrint : Night}
              alt="Button to change to darkmode"
              className="cursor-pointer -rotate-12 transition-1000"
            />
          </span>
        </motion.div>
      </div>

      {/* Hero image */}
      {showImage && <MainImage />}

      {/* Tailor Made */}
      <TailorMade />
    </div>
  );
}
