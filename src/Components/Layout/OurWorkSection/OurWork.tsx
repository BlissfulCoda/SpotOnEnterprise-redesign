import { useState, useEffect, useContext } from "react";

import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import { SpotOnEntepriseGifsAndLogos } from "../../../Data/ComponentData";

import { FaAngleLeft } from "react-icons/fa";
import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import ImageContainer from "./ImageContainer";

function OurWork(): JSX.Element {
  const { theme } = useContext(DarkModeContext) as DarkModeDataInterface;

  const { DarkLogo, LightLogo } = SpotOnEntepriseGifsAndLogos;

  // Framer Motion setings
  const x = useSpring(0, { stiffness: 600, damping: 100 });
  const START_INDEX: number = -3000;

  const scrollYPosition = window.scrollY >= 1760 && window.scrollY <= 1860;

  // MOTION - TRANSFORMS
  const width = useTransform(x, [START_INDEX, 0], [346, 0]);
  const scale = useTransform(x, [-100, 0], [1.25, 1]);
  const fadeIn = useTransform(x, [-100, 0], [1, 0]);
  const fadeOut = useTransform(x, [-100, 0], [0, 1]);
  const up = useTransform(x, [-100, 0], [-100, 0]);
  // state
  const [state, setState] = useState<boolean>(false);

  // overflow
  let targetElement = document.querySelector("html");

  useEffect(() => {
    // change state when dragged on x - axis is pass
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true);
    });
  }, [x]);

  // No scroll while drag state is active
  useEffect(() => {
    state
      ? targetElement?.classList.add("no-scroll")
      : targetElement?.classList.remove("no-scroll");
  });

  const handleCloseDrag = () => {
    x.stop();
    x.set(0);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <section
      id="work"
      className="container px-6 py-12 mx-auto mb-20 space-y-4 duration-1000 sm:p-2 laptop:-space-y-4 biggest:max-w-6xl"
    >
      <motion.div
        style={{ translateY: up }}
        className="container mx-auto duration-100 tablet:px-40 laptop:px-56"
      >
        <h2>WHAT WE OFFER</h2>
      </motion.div>

      {/* MOBILE CONTAINER */}
      <div className="relative tablet:hidden">
        <motion.div
          style={{ opacity: fadeIn }}
          className={state ? "background" : "hidden"}
        ></motion.div>
        {/* LOGO AND EXIT */}
        {state ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                y: { duration: 0.5 },
                default: { ease: "linear" },
              }}
              className="drag-header"
            >
              <img
                src={theme ? DarkLogo : LightLogo}
                alt="SpotOnEnterprise Logo"
                className="w-40 h-12"
              />
              <div className=" close">
                <AiOutlineClose className="" onClick={handleCloseDrag} />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence></AnimatePresence>
        )}
        {/* IMAGE CONTAINER */}
        <div
          className={
            scrollYPosition ? "image-container -ml-3" : "image-container"
          }
        >
          {scrollYPosition ? (
            <motion.div
              transition={{
                x: { duration: 0.5 },
                default: { ease: [1, 0.06, -0.06, 0.99] },
              }}
              style={{ x, scale }}
              drag={"x"}
              dragConstraints={{ left: START_INDEX, right: 0 }}
              dragElastic={0.07}
              className=" tablet:hidden grid-container"
            >
              <motion.div
                style={{ x }}
                drag={"x"}
                dragConstraints={{ left: START_INDEX, right: 0 }}
                dragElastic={0.07}
                className="absolute top-0 bottom-0 left-0  z-40 w-[5800px] sm:w-[6600px] h-full tablet:hidden  opacity-0 duration-400"
              ></motion.div>
              <ImageContainer />
            </motion.div>
          ) : (
            <motion.div className="grid-container">
              <ImageContainer />
            </motion.div>
          )}
        </div>

        {/* PROGRESS BAR CONTAINER */}
        <div className="max-w-xs mx-auto space-y-2 sm:px-2 sm:max-w-md tablet:hidden">
          <motion.div
            style={{ opacity: fadeOut, x }}
            className={
              scrollYPosition
                ? "flex items-center justify-end mb-4 space-x-2 duration-500"
                : "flex items-center justify-end mb-4 space-x-2"
            }
          >
            <div
              className={
                scrollYPosition
                  ? "text-bgPurple animate-wave w-min opacity-100 duration-500 text-xl"
                  : "text-bgPurple opacity-20"
              }
            >
              👆
            </div>
            <h5
              className={
                scrollYPosition
                  ? "font-black text-right opacity-100 duration-500 animate-pulse "
                  : "font-black text-right opacity-20 text-[9px] duration-500"
              }
            >
              Drag To Explore
            </h5>
          </motion.div>
          {/* PROGESS BAR */}
          <div className="drag-progress-background tablet:hidden ">
            <motion.div
              style={{ width }}
              className="drag-progress tablet:hidden"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* TABLET & UP */}
      <div className="hidden tablet:grid">
        <ImageContainer />
      </div>
    </section>
  );
}

export default OurWork;
