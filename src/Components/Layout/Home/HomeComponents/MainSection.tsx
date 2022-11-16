import { useContext } from "react";
import { DarkModeDataInterface } from "../../../../Data/DarkModeData";
import DarkModeContext from "../../../../Context/DarkModeContext";

import MainImage from "./MainImage";
import TailorMade from "../../Shared/TailorMade";

import Location from "../../../assets/Gifs/Location.gif";

import Instagram from "../../../assets/Gifs/Instagram.gif";
import Night from "../../../assets/Gifs/Night.gif";
import Fingerprint from "../../../assets/Gifs/Fingerprint.gif";

export default function MainSection(): JSX.Element {
  const { gif, handleChange } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  const SPOTONENTERPRISE_INSTAGRAM =
    "https://www.instagram.com/spotonenterprise/";

  const SPOTONENTERPRISE_LOCATION =
    "https://www.google.com/maps/place/111+East+St,+London/@51.4890573,-0.0916229,17z/data=!4m5!3m4!1s0x4876036188999255:0xc28bbd3db39f349c!8m2!3d51.4890403!4d-0.0916112";

  return (
    <div className="container mx-auto ">
      <div className="absolute z-20 top-72 w-[460px] pl-8 sm:pl-14 tablet:pl-4 tablet:space-y-32 space-y-40 tablet:top-28 laptop:space-y-40 laptop:left-14 mx-10 desktop:left-14 biggest:left-20">
        <div className="space-y-20 tablet:space-y-12 laptop:space-y-16 ">
          <div className="flex flex-col space-y-3 sm:px-4 tablet:px-0 tablet:space-y-0 sm:space-y-3 tablet:space-y-4 laptop:space-y-7">
            {/* text - white: small - screen */}
            <div
              className="tablet:hidden text-white max-w-xs font-serif text-[55px] font-semibold leading-[50px] tablet:font-blacktablet:text-7xl tablet:leading-[60px] laptop:text-8xl 
               laptop:leading-[75px] desktop:text-[112px] desktop:leading-[90px] "
            >
              <h1>Bespoke Garments</h1>
            </div>

            {/* text - black: large - screen */}
            <div
              className="hidden max-w-xs tablet:flex font-serif text-[55px] font-medium leading-[50px] tablet:font-black tablet:text-7xl tablet:leading-[60px] laptop:text-8xl 
               laptop:leading-[75px]  desktop:text-[110px] desktop:leading-[90px] "
            >
              <h1>Bespoke Garments</h1>
            </div>

            {/*  small - screen */}
            <p className="text-white  tablet:hidden tablet:flex font-serif tracking-normal text-sm w-[210px] leading-5 opacity-80">
              Specialiaties in producing bespoke, custom made garments for every
              special occasion.
            </p>
            {/* tablet - screen */}
            <p
              className="hidden tablet:flex font-light tablet:leading-4 tablet:flex tablet:w-3/4 text-justify  laptop:w-[390px] laptop:leading-5  desktop:w-[450px] desktop:text-base font-serif desktop:leading-7 biggest:w-[450px]
              biggest:text-base"
            >
              We Specialise in producing bespoke, custom made garments for every
              special occasion, with the best customer service next to none.
            </p>
          </div>

          {/* LARGE BUTTONS */}
          <div className="flex tablet:flex-row laptop:space-x-2 laptop:flex sm:pl-4 tablet:pl-0">
            <a
              href="#contact"
              type="button"
              className="button tablet:text-xs text-white rounded-br-full shadow rounded-tr-3xl shadow-3xl cursor-pointer border-slate-400 bg-gradient-to-r from-[#E34CCE] to-[#E39B57] duration-500 border-none"
            >
              Get in touch
            </a>
            <a
              href="#work"
              type="button"
              className="duration-500 bg-white rounded-tl-full shadow cursor-pointer button tablet:text-xs rounded-bl-3xl shadow-3xl dark:shadow-gray-100/5 dark:bg-transparent dark:border-slate-500 "
            >
              View Collection
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-between hidden w-24 space-x-2 tablet:flex tablet:pl-0 laptop:flex ">
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
          <a href="#" className="w-6 h-6" onClick={handleChange}>
            <img
              src={gif ? Fingerprint : Night}
              alt="Button to change to darkmode"
              className="cursor-pointer -rotate-12 transition-1000"
            />
          </a>
        </div>
      </div>

      {/* Hero image */}
      <MainImage />

      {/* Tailor Made */}
      <TailorMade />
    </div>
  );
}
