import { RiDoubleQuotesR } from "react-icons/ri";
import Card from "../Shared/Card";

import TestimonialCarousel from "./TestimonialCarousel";

function Testimonials(): JSX.Element {
  return (
    <section
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="true"
      id="testimonials"
      className="px-3 py-8 space-y-4 mb-28 section-container sm:px-0"
    >
      <div className="space-y-2">
        <h2>TESTIMONIALS</h2>
      </div>

      <Card className="flex flex-col pr-1 space-y-2 shadow shadow-lg tablet:flex-row section-container tablet:max-w-2xl laptop:max-w-5xl desktop:max-w-5xl tablet:h-full tablet:pr-0 dark:shadow-slate-500/5">
        
        {/* LEFT SIDE */}
        <Card className="flex items-center justify-center w-full h-80 bg-[#071C3E] dark:bg-[#01112C] bg-zinc-20 rounded-br-[60px] py-20 px-40 tablet:w-1/2 tablet:h-96 laptop:h-[460px] desktop:h-[480px] biggest:h-[520px]">
          {/* inner container */}
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
            className="relative max-w-xs font-serif text-white "
          >
            {/* ICON CONTAINER */}
            <div className="absolute rounded-full w-9 h-9 bg-emerald-300 -top-4 -left-6 opacity-10 laptop:h-10 laptop:w-10 la desktop:h-12 desktop:w-12 desktop:-top-6 desktop:-left-7"></div>
            {/* ICON */}
            <RiDoubleQuotesR
              className="absolute text-green-400 -top-1 -left-2 animate-ping"
              size={9}
            />
            <h3 className="text-2xl font-bold leading-8 tracking-wide text-left laptop:text-3xl desktop:text-4xl desktop:leading-tight">
              What Our Customers Are Saying
            </h3>
          </div>
        </Card>

        {/* RIGHT SIDE - IMAGES + CUSTOMER FEEDBACK */}
        <Card className="w-full px-5 mx-auto py-9 tablet:w-1/2 tablet:py-0 tablet:px-0">
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <TestimonialCarousel />
          </div>
        </Card>
      </Card>
    </section>
  );
}

export default Testimonials;
