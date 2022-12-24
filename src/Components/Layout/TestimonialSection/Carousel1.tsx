import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import Card from "../Shared/Card";
import TestimonialData from "../../../Data/ComponentData";
import TestimonialSlides from "./TestimonialSlides";

export default function TestimonialCarousel(): JSX.Element {
  const [leftClicked, setLeftClicked] = useState<boolean>(false);
  const [rightClicked, setRightClicked] = useState<boolean>(false);
  const [[review, direction], setPage] = useState([0, 0]);

  //
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const reviewIndex = wrap(0, TestimonialData.length, review);

  const paginate = (newDirection: number) => {
    setPage([review + newDirection, newDirection]);
  };

  return (
    <Card className="w-full h-[470px] px-2 mx-auto tablet:w-1/2 tablet:p-0 tablet:w-96 ">
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
      <div className="testimonial-slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.section
            className="duration-500 slider-section"
            key={review}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div className="relative">
              {/*------ HIDDEN UNDERLAY ------*/}
              <div className="w-64 h-[330px] sm:w-80 sm:h-[420px] ml-5 sm:ml-3 tablet:ml-0 space-y-5 rounded-tl-[50px] rounded-br-[60px] bg-gradient-to-r from-[#E34CCE] to-[#E39B57] tablet:h-[290px] tablet:w-56 tablet:ml-13 opacity-5 dark:opacity-100 laptop:h-[370px] laptop:w-[260px] desktop:h-[400px] desktop:w-[310px] desktop:-ml-4 biggest:h-[410px] destop:w-[320px] biggest:px-4 biggest:-ml-3 dark:from-[#151D34] dark:to-[#151D34]"></div>
              {/*------ MAIN SECTION ------*/}
              <div className="absolute -top-4 left-10 w-64  h-[330px] sm:w-80 sm:h-[420px]  p-4 sm:p-6  sm:ml-8 space-y-5 sm:space-y-7 shadow shadow-lg rounded-tl-[50px] rounded-br-[60px] border border-slate-100  dark:border-slate-900  sm:-top-4 tablet:-top-1 z-20 bg-white dark:bg-darkMode tablet:h-[290px] tablet:w-56 tablet:ml-4 tablet:py-5 tablet:px-4 laptop:h-[370px] laptop:w-[265px] laptop:py-6 laptop:px-4 laptop:-top-1 laptop:ml-5 desktop:h-[400px] desktop:w-[310px] desktop:ml-2 desktop:-top-4 desktop:px-4 biggest:h-[410px] biggest:w-[320px] biggest:px-5 desktop:py-8 biggest:ml-2 biggest:-top-5 dark:shadow-slate-300/5">
                {/*------ IMAGE ------*/}
                <div className="flex flex-col items-center space-y-5 tablet:pt-1 tablet:space-y-3">
                  <div className="flex">
                    <span className="border border-slate-300 dark:border-slate-700 rounded-full p-[2px] ">
                      <img
                        src={TestimonialData[reviewIndex]["img"]}
                        alt=""
                        className="object-cover w-16 h-16 rounded-full sm:w-20 sm:h-20 tablet:w-16 tablet:h-16 laptop:w-20 laptop:h-20 "
                      />
                    </span>
                  </div>

                  {/*------ NAME & DATE ------*/}
                  <div className="font-serif text-center -space-y-0 ">
                    <h5 className="text-[12px] sm:text-[11px] tablet:text-[10px] laptop:text-xs desktop:text-base">
                      {TestimonialData[reviewIndex]["name"]}
                    </h5>
                    <h5 className="text-[8px] sm:text-[9px] opacity-40 tablet:text-[8px] desktop:text-[10px]">
                      {TestimonialData[reviewIndex]["date"]}
                    </h5>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="w-full border-b-[1px] border-b-slate-200 dark:border-b-gray-800"></div>
                  {/*------ PARAGRAPH ------*/}
                  <p className="font-serif text-[8px] sm:text-[12px] leading-4 tracking-normal sm:tracking-tightest sm:leading-5 text-justify opacity-40 font-semibold tablet:text-[7px] tablet:leading-3 tablet:tracking-tightest laptop:text-[10px] laptop:leading-4 laptop:tracking-tightest desktop:text-[12px] desktop:leading-5 desktop:tracking-tighter">
                    {TestimonialData[reviewIndex]["text"]}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="flex justify-center pl-4 space-x-2 opacity-50 tablet:mb-0 tablet:pl-0 tablet:pt-0">
        <motion.button
          initial={{ opacity: 0.8 }}
          animate={{ opacity: rightClicked ? 0.3 : 1 }}
          onClick={() => paginate(-1)}
          className={leftClicked ? "animate-pulse " : ""}
        >
          <FaLongArrowAltLeft size={25} />
        </motion.button>
        <motion.button
          initial={{ opacity: 0.2 }}
          animate={{ opacity: leftClicked ? 0.3 : 1 }}
          onClick={() => paginate(1)}
          className={rightClicked ? "animate-pulse " : ""}
        >
          <FaLongArrowAltRight size={25} />
        </motion.button>
      </div>
    </Card>
  );
}
