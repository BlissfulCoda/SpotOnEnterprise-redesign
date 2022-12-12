import { motion as m } from "framer-motion";

import { useContext, useState, useEffect } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";
import DarkModeContext from "../Context/DarkModeContext";

import Loader from "./Layout/Loader/Loader";
import Home from "./Layout/Home/HomeSection";
import About from "./Layout/AboutSection/About";
import OurWork from "./Layout/OurWorkSection/OurWork";
import Testimonials from "./Layout/TestimonialSection/Testimonials";
import Contact from "./Layout/ContactSection/Contact";
import Footer from "./Layout/FooterSection/FooterSection";
import PageIndicator from "./Layout/Shared/PageIndicator";

import MobileMenu from "./Layout/Home/HomeComponents/MobileMenu";

function Components(): JSX.Element {
  const { checked } = useContext(DarkModeContext) as DarkModeDataInterface;

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div className="space-y-6 overflow-hidden text-black ease-in-out bg-white tablet:space-y-20 laptop:space-y-16 dark:bg-darkMode dark:text-white scroll-smooth">
          {checked ? (
            <MobileMenu />
          ) : (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            >
              <Home />
              <About />
              <OurWork />
              <Testimonials />
              <Contact />
              <Footer />
            </m.div>
          )}
        </div>
      )}
    </section>
  );
}

export default Components;
