
import { useState } from 'react';

import Home from './Components/Layout/Home/Home';
import About from "./Components/Layout/AboutSection/About"
import OurWork from "./Components/Layout/OurWorkSection/OurWork";
import Testimonials from "./Components/Layout/TestimonialSection/Testimonials";
import Contact from "./Components/Layout/ContactSection/Contact";
import Footer from "./Components/Layout/FooterSection/Footer";


function App() {
   const [darkMode, setDarkMode] = useState<boolean>(false);
  
   
   const toggleDarkMode = () => {
     setDarkMode(!darkMode);
   }


   
   
  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="space-y-4 laptop:space-y-12 dark:bg-darkMode dark:text-white ">
        <Home toggleDarkMode={toggleDarkMode}  />
        <About />
        <OurWork />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default App;
