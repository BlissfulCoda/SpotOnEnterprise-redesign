import { useContext } from "react";
import { DarkModeDataInterface } from "../../../../Data/DarkModeData";
import DarkModeContext from "../../../../Context/DarkModeContext";

import { FaPhone } from "react-icons/fa";

import {
  SpotOnEntepriseContact,
  SpotOnEntepriseGifsAndLogos,
} from "../../../../Data/ComponentData";

import HamburgeMenu from "../../Shared/HamburgeMenu";

export default function MobileMenu(): JSX.Element {
  const { theme, handleChange, gif, handleNavRemove } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;

  const { SPOTONENTERPRISE_INSTAGRAM, SPOTONENTERPRISE_LOCATION } =
    SpotOnEntepriseContact;

  const { Night, DarkLogo, LightLogo, Instagram, Location, FingerPrint} =
    SpotOnEntepriseGifsAndLogos;

  const year: number = new Date().getUTCFullYear();

  

  return (
    <section
      id="mobile-menu"
      className="container relative flex flex-col justify-center w-full h-screen mx-auto text-xl laptop:hidden section-container"
    >
      <HamburgeMenu />
      <div className="min-h-screen ">
        <img
          src={theme ? DarkLogo : LightLogo}
          className="absolute h-12 ml-2 w-44 brightness-150 contrast-200 change-transitions top-4 left-2"
          alt="SpotOnEnterprise Logo"
        />

        <nav
          aria-label="mobile"
          className="flex flex-col items-center space-y-3 opacity-90 py-28"
        >
          <a
            href="#home"
            className="w-full py-6 text-center hover-opacity-90"
            onClick={handleNavRemove}
          >
            Home
          </a>
          <a
            href="#about"
            className="w-full py-6 text-center hover-opacity-90"
            onClick={handleNavRemove}
          >
            About
          </a>
          <a
            href="#work"
            className="w-full py-6 text-center hover-opacity-90"
            onClick={handleNavRemove}
          >
            Work
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover-opacity-90"
            onClick={handleNavRemove}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full py-6 text-center hover-opacity-90"
            onClick={handleNavRemove}
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
                src={gif ? FingerPrint : Night}
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
