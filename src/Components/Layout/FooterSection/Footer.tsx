import { FaFacebookF } from "react-icons/fa";

import DarkLogo from "../../assets/Logos/DarkLogo.png";
import LightLogo from "../../assets/Logos/LightLogo.png";



function Footer(): JSX.Element {
  const year: number = new Date().getUTCFullYear();
  return (
    <section
      className=" border-t-[1px] py-6 space-y-6 laptop:space-y-10 desktop:space-y-12 "
      id="footer"
    >
      <div className="flex flex-col max-w-sm p-3 space-y-8 tablet:max-w-3xl laptop:max-w-5xl section-container tablet:space-y-0 tablet:p-0 tablet:flex-row tablet:py-4 tablet:px-4 laptop:space-x-12 laptop:py-6 desktop:max-w-7xl desktop:space-x-32">
        {/* LOGO  */}
        <div className="w-56 pt-1 bg-no-repeat cursor-pointer h-14 contrast-100 brightness-150 dark:bg-light-logo-mode bg-logo-dark-mode"></div>

        {/* lINKS CONTAINER*/}
        <div className="flex flex-col px-2 py-4 space-y-10 tablet:space-y-0 tablet:flex-row tablet:space-x-14 laptop:space-x-32">
          {/* Company */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-6">
            <div className="space-y-2">
              <h4>COMPANY </h4>
              <div className="footer-border"></div>
            </div>
            <div className="space-y-4 tablet:space-y-2 laptop:space-y-3">
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
              <h4>CONTACT </h4>
              <div className="footer-border"></div>
            </div>
            <div className="container space-y-4 tablet:space-y-2 font-body laptop:space-y-3">
              <h5>111C East Street Walworth London SE17 2SB</h5>
              <h5>+(44) 753 823 6771</h5>
              <h5>info.spotonenterprise@gmail.com</h5>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-6 socials tablet:space-y-6 laptop:space-y-8">
            <div className="space-y-2">
              <h4>FOLLOW US </h4>
              <div className="footer-border"></div>
            </div>
            {/* instagram */}
            <div className="space-y-2 tablet:space-y-3 laptop:space-y-3">
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

export default Footer;
