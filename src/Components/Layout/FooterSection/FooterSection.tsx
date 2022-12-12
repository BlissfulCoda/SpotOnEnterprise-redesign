import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

import { SpotOnEntepriseContact } from "../../../Data/ComponentData";

function FooterSection(): JSX.Element {
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
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
          className="flex flex-col items-center inner-footer tablet:w-1/3 tablet:bg-zinc-50 dark-color tablet:dark:bg-dark-color "
        >
          <h3 className="footer-subheader">NAVIGATION</h3>
          <div className="footer-subcontainer laptop:space-y-4">
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

        {/* CONTACT */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="50"
          data-aos-once="true"
          className=" inner-footer bg-zinc-50 tablet:w-1/3 tablet:bg-white dark:bg-[#0E1426] tablet:dark:bg-darkMode"
        >
          <h3 className="footer-subheader">CONTACT</h3>
          <div className="flex flex-col items-center footer-subcontainer">
            <div className="flex mb-8 space-x-3 laptop:mb-5 tablet:mb-7 tablet:py-12 laptop:py-16 tablet:space-x-5">
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
            <h5 className="footer-link ">info.SpotOnEnterprise@gmail.com</h5>
          </div>
        </div>

        {/* COMPANY */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="50"
          data-aos-once="true"
          className="inner-footer tablet:w-1/3 tablet:bg-zinc-50 dark-color tablet:dark:bg-dark-color"
        >
          <h3 className="footer-subheader">COMPANY</h3>
          <div className="mb-16 footer-subcontainer">
            <h5 className="footer-link">111C East Street Walworth</h5>
            <h5 className="footer-link">London SE17 2SB</h5>
            <h5 className="font-body footer-link">+(44) 753 823 6771</h5>
          </div>
          {/* FOOTER ©  */}
          <h5 className=" text-[7px] laptop:text-[5px] laptop:pt-6 text-center opacity-50">
            ©{year} Spot On Enterprise. All Rights Reserved.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
