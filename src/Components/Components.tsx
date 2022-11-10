import { useContext } from "react";
import { DarkModeDataInterface } from "../Data/DarkModeData";
import DarkModeContext from "../Context/DarkModeContext";

import Home from "../Components/Layout/Home/Home";
import About from "../Components/Layout/AboutSection/About";
import OurWork from "../Components/Layout/OurWorkSection/OurWork";
import Testimonials from "../Components/Layout/TestimonialSection/Testimonials";
import Contact from "../Components/Layout/ContactSection/Contact";
import Footer from "../Components/Layout/FooterSection/Footer";

function Components(): JSX.Element {
    const  {darkMode} = useContext(DarkModeContext) as DarkModeDataInterface;
    
  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="space-y-4 laptop:space-y-12 dark:bg-darkMode dark:text-white ">
        <Home />
        <About />
        <OurWork />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default Components;
