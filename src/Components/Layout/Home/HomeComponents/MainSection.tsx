import { useContext} from "react";
import { DarkModeDataInterface } from "../../../../Data/DarkModeData";
import DarkModeContext from "../../../../Context/DarkModeContext";

import MainImage from "./MainImage";

import Location from "../../../assets/Gifs/Location.gif";
import Button from "../../Shared/Button";

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
      <div className="absolute z-20 top-72 w-[460px] pl-5 sm:pl-16 tablet:pl-4 tablet:space-y-32 space-y-40 tablet:top-28 laptop:space-y-32 laptop:left-12 mx-10 desktop:left-12 biggest:left-28">
        <div className="space-y-20 tablet:space-y-12 laptop:space-y-16 ">
          <div className="flex flex-col space-y-3 sm:px-4 tablet:px-0 tablet:space-y-0 sm:space-y-3 tablet:space-y-4 laptop:space-y-7">
            {/* text - white: small - screen */}
            <div
              className="tablet:hidden text-white max-w-xs font-serif text-[55px] font-medium leading-[50px] tablet:font-blacktablet:text-7xl tablet:leading-[60px] laptop:text-8xl 
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
            <p className="text-white tablet:hidden tablet:flex text-[10px] w-[210px] leading-4  font-light tablet:leading-4 tablet:opacity-50 tablet:flex tablet:w-2/3 text-justify tablet:text-[10.5px] laptop:w-[380px] laptop:leading-5 laptop:text-sm desktop:text-[15px] opacity-70 desktop:w-[440px] desktop:text-[16px] font-serif desktop:leading-6">
              We Specialise in producing bespoke, custom made garments for every
              special occasion, with the best customer service next to none.
            </p>
            {/* tablet - screen */}
            <p
              className="hidden tablet:flex font-light tablet:leading-4  tablet:flex tablet:w-3/4 text-justify  laptop:w-[380px] laptop:leading-5  desktop:w-[440px] desktop:text-[16px] font-serif desktop:leading-6 biggest:w-[480px]
                biggest:text-[17px]"
            >
              We Specialise in producing bespoke, custom made garments for every
              special occasion, with the best customer service next to none.
            </p>
          </div>

          {/* MOBILE BUTTON */}
          <Button
            className="px-20 py-3 ml-4 font-serif text-xs font-light text-white duration-500 border rounded-sm shadow tablet:hidden hover:scale-105 laptop:text-sm shadow-3xl border-slate-100 dark:border-slate-400"
            type="button"
          >
            Get in touch
          </Button>

          {/* LARGE BUTTONS */}
          <div className="flex flex-col hidden tablet:flex tablet:flex-row laptop:space-x-2 laptop:flex ">
            <Button
              type="button"
              className="px-9  font-serif text-xs text-white font-light  border border-none rounded-sm rounded-br-full shadow rounded-tr-3xl hover:scale-105 shadow-3xl cursor-pointer border-slate-400 bg-gradient-to-r from-[#E34CCE] to-[#E39B57] duration-500"
            >
              Get in touch
            </Button>
            <Button
              type="button"
              className="flex gap-1 py-3 font-serif text-xs font-light duration-500 border border-none rounded-sm rounded-tl-full shadow cursor-pointer px-9 rounded-bl-3xl hover:scale-105 shadow-3xl dark:shadow-gray-100/5"
            >
              View Collection
            </Button>
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
      <div
        className="absolute -rotate-90 -left-[72px] top-[230px] font-serif font-bold w-[800px] opacity-5 text-9xl sm:left-3 tablet:text-[105px] tablet:left-64 tablet:top-[100px] laptop:left-[510px] laptop:text-[125px] laptop:top-[200px]
        desktop:left-[570px] 
        biggest:left-[670px]"
      >
        Tailor Made
      </div>
    </div>
  );
}
