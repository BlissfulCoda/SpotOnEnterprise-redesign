import Home from "./Layout/HomeSection/Home";
import About from "./Layout/AboutSection/About";
import OurWork from "./Layout/OurWorkSection/OurWork";
import Testimonials from "./Layout/TestimonialSection/Testimonials";
import Contact from "./Layout/ContactSection/Contact";
import Footer from "./Layout/FooterSection/Footer";

export default function MainSection(): JSX.Element {
  return (
    <div>
      <Home />
      <About />
      <OurWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
