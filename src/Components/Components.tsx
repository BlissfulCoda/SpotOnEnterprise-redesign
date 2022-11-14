import { useContext } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";
import DarkModeContext from "../Context/DarkModeContext";

import Home from "./Layout/Home/HomeSection";
import About from "../Components/Layout/AboutSection/About";
import OurWork from "../Components/Layout/OurWorkSection/OurWork";
import Testimonials from "../Components/Layout/TestimonialSection/Testimonials";
import Contact from "../Components/Layout/ContactSection/Contact";
import Footer from "./Layout/FooterSection/FooterSection";

import MobileMenu from "../Components/Layout/Home/HomeComponents/MobileMenu";

function Components(): JSX.Element {
  const { checked } = useContext(
    DarkModeContext
  ) as DarkModeDataInterface;



  return (
    <section>
      <div className="space-y-4 duration-300 ease-in-out tablet:space-y-12 laptop:space-y-12 dark:bg-darkMode dark:text-white scroll-smooth">
        {checked ? (
          <MobileMenu />
        ) : (
          <>
            <Home />
            <About />
            <OurWork />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </section>
  );
}

export default Components;
