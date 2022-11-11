import { useContext } from "react";
import { DarkModeDataInterface } from "../../../../Data/DarkModeData";
import DarkModeContext from "../../../../Context/DarkModeContext";

import { FaPhone } from "react-icons/fa";

import DarkLogo from "../../../assets/Logos/DarkLogo.png";
import LightLogo from "../../../assets/Logos/LightLogo.png";

import Location from "../../../assets/Gifs/Location.gif";
import Instagram from "../../../assets/Gifs/Instagram.gif";
import Night from "../../../assets/Gifs/Night.gif";
import Fingerprint from "../../../assets/Gifs/Fingerprint.gif";

export default function MobileMenu(): JSX.Element {
  const { toggleLogo, handleChange, gif } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  const SPOTONENTERPRISE_INSTAGRAM =
    "https://www.instagram.com/spotonenterprise/";

  const SPOTONENTERPRISE_LOCATION =
    "https://www.google.com/maps/place/111+East+St,+London/@51.4890573,-0.0916229,17z/data=!4m5!3m4!1s0x4876036188999255:0xc28bbd3db39f349c!8m2!3d51.4890403!4d-0.0916112";

  const year: number = new Date().getUTCFullYear();

  return (
    <section
      id="mobile-menu"
      className="relative flex flex-col justify-center w-full h-screen text-xl "
    >
      <div className="min-h-screen">
        <img
          src={toggleLogo ? DarkLogo : LightLogo}
          className="absolute h-12 ml-2 w-44 brightness-150 contrast-200 change-transitions top-1"
          alt="SpotOnEnterprise Logo"
        />

        <nav
          aria-label="mobile"
          className="flex flex-col items-center space-y-3 opacity-90 py-28"
        >
          <a href="#home" className="w-full py-6 text-center hover-opacity-90">
            Home
          </a>
          <a href="#about" className="w-full py-6 text-center hover-opacity-90">
            About
          </a>
          <a href="#work" className="w-full py-6 text-center hover-opacity-90">
            Work
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover-opacity-90"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover-opacity-90"
          >
            Contact
          </a>
          <div className="flex py-6 space-x-2 tablet:flex laptop:pr-0">
            <FaPhone
              size={24}
              className="text-yellow-400 delay-500 animate-pulse"
            />
            <h4 className="text-lg text-bgPurple font-body">
              +(44) 753 823 6771
            </h4>
          </div>
        </nav>

        {/* Social Media */}
        <div className="space-y-2">
          <div className="flex items-center justify-between w-32 mx-auto space-x-4">
            <a
              href={SPOTONENTERPRISE_INSTAGRAM}
              className="h-6 w-9 "
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Instagram}
                alt="SpotOnEnterprise_Instagram"
                className="cursor-pointer "
              />
            </a>
            <a
              href={SPOTONENTERPRISE_LOCATION}
              className="h-6 w-9"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Location}
                alt="SpotOnEnterprise_Location"
                className="cursor-pointer "
              />
            </a>
            <a href="#" className="h-6 w-9" onClick={handleChange}>
              <img
                src={gif ? Fingerprint : Night}
                alt="Button to change to darkmode"
                className="cursor-pointer -rotate-12 transition-1000"
              />
            </a>
          </div>
          {/* Footer */}
          <h5 className="text-center opacity-40 text-[9px] p-4">
            ©{year} SpotOnEnterprise. All Rights Reserved.
          </h5>
        </div>
      </div>
    </section>
  );
}
