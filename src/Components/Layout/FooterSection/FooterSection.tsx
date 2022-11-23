import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

import { useContext } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import { SpotOnEntepriseContact } from "../../../Data/ComponentData";

function FooterSection(): JSX.Element {
  const { theme } = useContext(DarkModeContext) as DarkModeDataInterface;

  const { SPOTONENTERPRISE_INSTAGRAM, SPOTONENTERPRISE_LOCATION } =
    SpotOnEntepriseContact;

  const SIZE: number = 16;

  const year: number = new Date().getUTCFullYear();
  return (
    <section
      className="border shadow shadow-2xl dark:bg-transparent border-t-slate-100 dark:border-t-slate-800 dark:border-b-0 dark:border-x-0"
      id="footer"
    >
      <div className="flex flex-col mx-auto tablet:flex-row ">
        {/* NAVIGATION */}
        <div className="flex flex-col items-center inner-footer tablet:w-1/3 tablet:bg-zinc-100 dark-color tablet:dark:bg-slate-900">
          <h3 className="footer-subheader">NAVIGATION</h3>
          <div className="footer-subcontainer">
            <a href="#home" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#work" className="footer-link">
              Work
            </a>
            <a className="footer-link" href="#testimonials">
              Testimonials
            </a>
            <a className="footer-link" href="#contact">
              Contact
            </a>
          </div>
        </div>

        {/* SOCIALS */}
        <div className=" inner-footer bg-zinc-100 tablet:w-1/3 tablet:bg-white dark:bg-slate-900 tablet:dark:bg-darkMode">
          {/* LOGO  */}
          <h3 className="footer-subheader">CONTACT</h3>
          <div className="flex flex-col items-center footer-subcontainer">
            <div className="flex mb-8 space-x-3 tablet:mb-6 tablet:py-12 tablet:space-x-5">
              {/* FACEBOOK */}
              <a target="_blank" href="https://www.facebook.com/Bspoton/">
                <FaFacebookF
                  size={SIZE}
                  className="text-slate-900 dark:text-slate-100"
                />
              </a>
              {/* INSTAGRAM */}
              <a href={SPOTONENTERPRISE_INSTAGRAM} target="_blank">
                {" "}
                <FaInstagram
                  size={SIZE}
                  className="text-slate-900 dark:text-slate-100"
                />
              </a>
              {/* LOCATION */}
              <a href={SPOTONENTERPRISE_LOCATION} target="_blank">
                <FaMapMarkerAlt
                  size={SIZE}
                  className="text-slate-900 dark:text-slate-100"
                />
              </a>
            </div>

            {/* EMAIL */}
            <h5 className="footer-link">info.SpotOnEnterprise@gmail.com</h5>
          </div>
        </div>

        {/* COMPANY */}
        <div className="inner-footer tablet:w-1/3 tablet:bg-zinc-100 dark-color tablet:dark:bg-slate-900">
          <h3 className="footer-subheader">COMPANY</h3>
          <div className="mb-16 footer-subcontainer">
            <h5 className="footer-link">111C East Street Walworth</h5>
            <h5 className="footer-link">London SE17 2SB</h5>
            <h5 className="font-body footer-link">+(44) 753 823 6771</h5>
          </div>
          {/* FOOTER ©  */}
          <h5 className=" text-[8px] laptop:text-xs laptop:pt-6 text-center opacity-50">
            ©{year} Spot On Enterprise. All Rights Reserved.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
