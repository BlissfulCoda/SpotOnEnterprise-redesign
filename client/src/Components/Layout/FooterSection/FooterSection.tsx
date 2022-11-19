import { useContext } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import {
  SpotOnEntepriseContact,
  SpotOnEntepriseGifsAndLogos,
} from "../../../Data/ComponentData";

function FooterSection(): JSX.Element {
  const { theme } = useContext(DarkModeContext) as DarkModeDataInterface;

  const { SPOTONENTERPRISE_INSTAGRAM, SPOTONENTERPRISE_LOCATION } =
    SpotOnEntepriseContact;

  const { DarkLogo, LightLogo, Instagram, Location } =
    SpotOnEntepriseGifsAndLogos;

  const year: number = new Date().getUTCFullYear();
  return (
    <section
      className="py-4 space-y-6 shadow shadow-2xl laptop:space-y-10 desktop:space-y-12 dark:bg-transparent border-t-slate-100 dark:border dark:border-t-slate-800 dark:border-b-none dark:border-x-0"
      id="footer"
    >
      <div className="flex flex-col max-w-sm px-4 py-3 pb-4 space-y-12 tablet:px-0 tablet:space-y-0 tablet:space-x-10 tablet:py-4 laptop:px-3 tablet:flex-row laptop:space-x-28 desktop:space-x-36 section-container">
        {/* LOGO  */}
        <img
          src={theme ? DarkLogo : LightLogo}
          className="h-12 text-center w-44 brightness-150 contrast-200 change-transitions"
          alt="SpotOnEnterprise Logo"
        />

        {/* lINKS CONTAINER*/}
        <div className="flex flex-col px-2 py-4 space-y-12 tablet:flex-row tablet:space-y-0 tablet:space-x-16 laptop:space-x-24 tablet:w-full tablet:px-0 desktop:space-x-36">
          {/* Company */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-6">
            <div className="space-y-2">
              <h4 className="footer-subheading">COMPANY</h4>
              <div className="footer-border"></div>
            </div>
            <div className="flex flex-col opacity-50 footer-links hover:opacity-100 ">
              <a href="#home" className="text-sm">
                Home
              </a>
              <a href="#about" className="text-sm">
                About
              </a>
              <a href="#work" className="text-sm">
                Work
              </a>
              <a className="text-sm" href="#testimonials">
                Testimonials
              </a>
              <a className="text-sm" href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-8">
            <div className="space-y-2">
              <h4 className="footer-subheading">CONTACT </h4>
              <div className="footer-border"></div>
            </div>
            <div className=" footer-links font-sm">
              <h5 className="text-sm">
                111C East Street Walworth London SE17 2SB
              </h5>
              <h5 className="text-sm">+(44) 753 823 6771</h5>
              <h5 className="text-sm">info.spotonenterprise@gmail.com</h5>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-8">
            <div className="space-y-2">
              <h4 className="footer-subheading">FOLLOW US </h4>
              <div className="footer-border"></div>
            </div>
            {/* instagram */}
            <div className="flex flex-col opacity-50 tablet:space-y-0 footer-links tablet:flex-row">
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
            </div>
          </div>
        </div>
      </div>

      {/* Footer Rights */}
      <h5 className="pt-4 text-center  opacity-50 text-[8px] laptop:text-xs laptop:pt-6">
        ©{year} Spot On Enterprise. All Rights Reserved.
      </h5>
    </section>
  );
}

export default FooterSection;
