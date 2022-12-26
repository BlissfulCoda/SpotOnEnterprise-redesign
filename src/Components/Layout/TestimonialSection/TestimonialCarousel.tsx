import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import Card from "../Shared/Card";
import TestimonialData from "../../../Data/ComponentData";

export default function TestimonialCarousel(): JSX.Element {
  const [leftClicked, setLeftClicked] = useState<boolean>(false);
  const [rightClicked, setRightClicked] = useState<boolean>(false);
  const [[review, direction], setPage] = useState([0, 0]);

  //
  const variants = {
    enter: (direction: number) => {
      return {
        zIndex: 0,
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

  const handlePaginate = (index: number) => {
    paginate(index);
  };

  return (
    <Card className="w-full h-[470px] sm:h-[520px] px-2 mx-auto tablet:w-full tablet:h-[400px]  tablet:w-96 laptop:h-[490px] desktop:h-[510px] biggest:h-[550px]">
      <h4 className="py-2 mb-6 font-serif text-lg leading-7 text-center opacity-30 tablet:mb-1 sm:text-xl tablet:text-base tablet:pr-6 tablet:py-0 laptop:text-xl laptop:mb-2 laptop:pr-0 desktop:mb-0 biggest:mb-3 desktop:text-xl">
        Don't Just Take Our Word For It!
      </h4>

      {/*--------- FEEDBACK LINE ---------*/}
      <span className="fixed flex items-center space-x-6 rotate-90 -left-36 top-64 sm:top-72 opacity-20 sm:-left-44 sm:pl-3 tablet:-left-32 tablet:pl-1 tablet:top-56 laptop:-left-40 desktop:-left-36 desktop:top-72">
        <div className="w-52 border-b-[1px] border-b-slate-400 dark:border-b-gray-300 sm:w-64 tablet:w-48 laptop:w-60"></div>
        <h5 className="text-[11px] sm:text-[15px] tablet:text-[14px] tracking-wide laptop:text-lg tracking-wider">
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
              opacity: { duration: 0.3 },
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
              <div className="w-64 h-[330px] sm:w-[310px] sm:h-[400px] tablet:h-[315px] tablet:w-[240px] ml-5  tablet:ml-0 space-y-5 rounded-tl-[60px] rounded-br-[70px] bg-gradient-to-r from-[#E34CCE] to-[#E39B57] opacity-10 dark:opacity-80 laptop:h-[380px] laptop:w-[300px] desktop:h-[420px] desktop:w-[340px] desktop:-ml-4 destop:w-[320px] biggest:h-[430px] biggest:w-[340px] biggest:px-4 biggest:-ml-3 dark:from-[#151D34] dark:to-[#151D34]"></div>
              {/*------ MAIN SECTION ------*/}
              <div
                className="absolute -top-4 left-9 w-64 h-[330px] p-4 sm:p-6 sm:ml-0 sm:-top-5 sm:left-10 sm:w-[310px] sm:h-[400px] space-y-5 sm:space-y-8 shadow shadow-lg rounded-tl-[60px] rounded-br-[70px] tablet:h-[315px] tablet:w-[240px] tablet:p-4 tablet:space-y-5 tablet:-top-3 tablet:left-4 border border-slate-100  dark:border-slate-900 z-20 bg-white dark:bg-darkMode laptop:h-[380px] laptop:w-[300px] laptop:py-4 laptop:space-y-7 laptop:p-6 laptop:-top-5 laptop:left-6 desktop:h-[420px] desktop:w-[340px] desktop:-top-5 desktop:p-5 
              desktop:left-2 desktop:space-y-7 biggest:h-[430px] biggest:w-[340px] biggest:px-6 biggest:ml-2 biggest:-top-6 dark:shadow-slate-300/5"
              >
                {/*------ IMAGE ------*/}
                <div className="flex flex-col items-center space-y-5 tablet:pt-1 tablet:space-y-3">
                  <div className="flex">
                    <span className="border border-slate-300 dark:border-slate-700 rounded-full p-[2px] ">
                      <img
                        src={TestimonialData[reviewIndex]["img"]}
                        alt={TestimonialData[reviewIndex]["alt"]}
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
                  <p className="font-serif font-light text-[8px] sm:text-[10px] leading-4 opacity-60 tracking-normal sm:tracking-tight sm:leading-5 tablet:leading-4 tablet:tracking-tight tablet:text-[8px] laptop:text-[11px] laptop:leading-5 laptop:tracking-tighter desktop:text-[12px] desktop:leading-5 desktop:tracking-tight biggest:text-[12px] biggest:leading-6 biggest:tracking-tighter">
                    {TestimonialData[reviewIndex]["text"]}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="flex justify-center pl-4 space-x-2 opacity-50 tablet:mb-0 tablet:pl-0 tablet:pt-0">
        <motion.button onClick={() => handlePaginate(-1)}>
          <FaLongArrowAltLeft size={25} />
        </motion.button>
        <motion.button onClick={() => handlePaginate(1)}>
          <FaLongArrowAltRight size={25} />
        </motion.button>
      </div>
    </Card>
  );
}
