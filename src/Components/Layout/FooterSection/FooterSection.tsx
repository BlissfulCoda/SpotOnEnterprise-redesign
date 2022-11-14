import { useContext } from "react";
import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import DarkLogo from "../../assets/Logos/DarkLogo.png";
import LightLogo from "../../assets/Logos/LightLogo.png";

function FooterSection(): JSX.Element {
  const { theme } = useContext(DarkModeContext) as DarkModeDataInterface;

  const year: number = new Date().getUTCFullYear();
  return (
    // FIXME: fix footer
    <section
      className=" border-t-[1px] py-4 space-y-6 laptop:space-y-10 desktop:space-y-12 "
      id="footer"
    >
      <div className="flex flex-col max-w-sm px-4 pb-4 space-y-12 tablet:px-6 tablet:max-w-3xl tablet:space-y-6 tablet:space-x-6 tablet:py-4 tablet:space-y-0 tablet:flex-row laptop:space-x-28 laptop:max-w-5xl section-container">
        {/* LOGO  */}
        <img
          src={theme ? DarkLogo : LightLogo}
          className="h-12 text-center w-44 brightness-150 contrast-200 change-transitions"
          alt="SpotOnEnterprise Logo"
        />

        {/* lINKS CONTAINER*/}
        <div className="flex flex-col px-2 py-4 space-y-12 tablet:flex-row tablet:space-y-0 tablet:space-x-16 laptop:space-x-24 tablet:w-full tablet:px-0 ">
          {/* Company */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-6">
            <div className="space-y-2">
              <h4 className="footer-subheading">COMPANY</h4>
              <div className="footer-border"></div>
            </div>
            <div className="footer-links">
              <h5>Home</h5>
              <h5>About</h5>
              <h5>Work</h5>
              <h5>Testimonials</h5>
              <h5>Contact</h5>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-8">
            <div className="space-y-2">
              <h4 className="footer-subheading">CONTACT </h4>
              <div className="footer-border"></div>
            </div>
            <div className="space-y-3">
              <h5>111C East Street Walworth London SE17 2SB</h5>
              <h5>+(44) 753 823 6771</h5>
              <h5>info.spotonenterprise@gmail.com</h5>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-8">
            <div className="space-y-2">
              <h4 className="footer-subheading">FOLLOW US </h4>
              <div className="footer-border"></div>
            </div>
            {/* instagram */}
            <div className="space-y-3">
              <h5>Instagram</h5>
              <h5>Facebook</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Rights */}
      <h5 className="pt-4 text-center border-t-2 opacity-50 text-[8px] laptop:text-xs laptop:pt-6">
        ©{year} Spot On Enterprise. All Rights Reserved.
      </h5>
    </section>
  );
}

export default FooterSection;
