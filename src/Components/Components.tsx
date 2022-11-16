import { motion as m } from "framer-motion";

import { useContext, useState, useEffect } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";
import DarkModeContext from "../Context/DarkModeContext";

import Loader from "./Layout/Loader/Loader";
import Home from "./Layout/Home/HomeSection";
import About from "../Components/Layout/AboutSection/About";
import OurWork from "../Components/Layout/OurWorkSection/OurWork";
import Testimonials from "../Components/Layout/TestimonialSection/Testimonials";
import Contact from "../Components/Layout/ContactSection/Contact";
import Footer from "./Layout/FooterSection/FooterSection";

import MobileMenu from "../Components/Layout/Home/HomeComponents/MobileMenu";

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
        <div className="space-y-4 ease-in-out tablet:space-y-12 laptop:space-y-12 dark:bg-darkMode dark:text-white scroll-smooth">
          {checked ? (
            <MobileMenu />
          ) : (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
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
