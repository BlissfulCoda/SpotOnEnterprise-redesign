import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import Card from "../Shared/Card";
import TestimonialData from "../../../Data/ComponentData";
import TestimonialSlides from "./TestimonialSlides";

export default function TestimonialCarousel(): JSX.Element {
  let sliderDirection: number;
  const parentRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Slide - Left
  const handleLeftChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    sliderDirection = 1;
    carouselRef.current!.style.justifyContent = "justify-end";
    parentRef.current!.style.transform = `translate( ${25}%)`;
  };

  const handleRightChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    sliderDirection = -1;
    carouselRef.current!.style.justifyContent = "justify-start";
    parentRef.current!.style.transform = `translate( ${-25}%)`;
  };

  const handleAppend = (event: any) => {
    if (sliderDirection === -1) {
      event.target.appendChild(event.target.firstElementChild);
    } else if (sliderDirection === 1) {
      event.target.prepend(event.target.lastElementChild);
    }

    event.target.style.transition = "none";
    event.target.style.transform = "translate(0)";
    setTimeout(() => {
      event.target.style.transition = "all 0.7s linear";
    });
  };

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Card className="w-full px-2 mx-auto tablet:w-1/2 tablet:p-0 tablet:w-96">
      <h4 className="mb-6 font-serif text-lg leading-7 text-center opacity-30 tablet:mb-1 sm:text-xl tablet:text-lg tablet:pr-6 tablet:py-0 laptop:text-xl laptop:mb-3 biggest:mb-4 desktop:text-xl">
        Don't Just Take Our Word For It!
      </h4>

      {/*--------- FEEDBACK LINE ---------*/}
      <span className="fixed flex items-center space-x-6 rotate-90 -left-36 top-56 sm:bottom-32 opacity-20 sm:-left-44 sm:pl-3 tablet:-left-28 tablet:pl-4 tablet:top-36 laptop:-left-36 desktop:-left-36">
        <div className="w-52 border-b-[1px] border-b-slate-400 dark:border-b-gray-300 sm:w-64 tablet:w-44 laptop:w-60"></div>
        <h5 className="text-[11px] sm:text-[15px] tablet:text-[12px] tracking-wide laptop:text-base">
          FEEDBACK
        </h5>
      </span>

      {/*--------- SLIDER ----------*/}
      <div className="testimonial-container">
        <div ref={carouselRef} className="testimonial-carousel">
          <div
            ref={parentRef}
            onTransitionEnd={handleAppend}
            className="testimonial-slider"
          >
            <AnimatePresence>
              {TestimonialData.map((review) => (
                <motion.span
                  key={review.id}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <TestimonialSlides review={review} />
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/*----------- BUTTONS ----------*/}
        <div className="flex justify-center pl-4 space-x-2 opacity-50 -pt-6 tablet:mb-0 tablet:pl-0 tablet:pt-0">
          <button onClick={handleLeftChange}>
            <FaLongArrowAltLeft size={22} />
          </button>
          <button onClick={handleRightChange}>
            <FaLongArrowAltRight size={22} />
          </button>
        </div>
      </div>
    </Card>
  );
}
