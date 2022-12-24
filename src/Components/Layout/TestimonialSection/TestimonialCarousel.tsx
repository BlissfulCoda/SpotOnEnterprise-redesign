import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import Card from "../Shared/Card";
import TestimonialData from "../../../Data/ComponentData";
import TestimonialSlides from "./TestimonialSlides";

export default function TestimonialCarousel(): JSX.Element {
  const [leftClicked, setLeftClicked] = useState<boolean>(false);
  const [rightClicked, setRightClicked] = useState<boolean>(false);
  let [count, setCount] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Slide - Left
  const handlePrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(1);
    setLeftClicked(true);
    setRightClicked(false);

    carouselRef.current!.style.justifyContent = "justify-end";
    parentRef.current!.style.transform = "translate(25%)";
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(-1);
    setLeftClicked(false);
    setRightClicked(true);

    carouselRef.current!.style.justifyContent = "justify-start";
    parentRef.current!.style.transform = "translate(-25%)";
  };

  const handleAppend = (event: any) => {
    if (count === -1) {
      event.target.appendChild(event.target.firstElementChild);
    } else if (count === 1) {
      event.target.prepend(event.target.lastElementChild);
    }
    event.target.style.transition = "none";
    event.target.style.transform = "translate(0)";
    setTimeout(() => {
      event.target.style.transition = "all 1s ease-in-out";
    });
  };

  return (
    <Card className="w-full px-2 mx-auto tablet:w-1/2 tablet:p-0 tablet:w-96">
      <h4 className="py-2 mb-6 font-serif text-lg leading-7 text-center opacity-30 tablet:mb-1 sm:text-xl tablet:text-lg tablet:pr-6 tablet:py-0 laptop:text-xl laptop:mb-3 biggest:mb-4 desktop:text-xl">
        Don't Just Take Our Word For It!
      </h4>

      {/*--------- FEEDBACK LINE ---------*/}
      <span className="fixed flex items-center space-x-6 rotate-90 -left-36 top-60 sm:bottom-32 opacity-20 sm:-left-44 sm:pl-3 tablet:-left-28 tablet:pl-4 tablet:top-36 laptop:-left-36 desktop:-left-36">
        <div className="w-52 border-b-[1px] border-b-slate-400 dark:border-b-gray-300 sm:w-64 tablet:w-44 laptop:w-60"></div>
        <h5 className="text-[11px] sm:text-[15px] tablet:text-[12px] tracking-wide laptop:text-base tracking-wider">
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
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <TestimonialSlides key={count} review={review} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/*----------- BUTTONS ----------*/}
        <div className="flex justify-center pl-4 space-x-2 opacity-50 -pt-6 tablet:mb-0 tablet:pl-0 tablet:pt-0">
          <motion.button
            initial={{ opacity: 0.8 }}
            animate={{ opacity: rightClicked ? 0.3 : 1 }}
            onClick={handlePrevious}
            className={leftClicked ? "animate-pulse " : ""}
          >
            <FaLongArrowAltLeft size={22} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0.2 }}
            animate={{ opacity: leftClicked ? 0.3 : 1 }}
            onClick={handleNext}
            className={rightClicked ? "animate-pulse " : ""}
          >
            <FaLongArrowAltRight size={22} />
          </motion.button>
        </div>
      </div>
    </Card>
  );
}
