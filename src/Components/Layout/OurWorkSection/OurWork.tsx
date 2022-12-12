import { WiMoonNew } from "react-icons/wi";
import { FaAngleLeft } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";

import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";

import { SpotOnEntepriseGifsAndLogos } from "../../../Data/ComponentData";

import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import ImageContainer from "./ImageDisplay";

function OurWork(): JSX.Element {
  const { theme } = useContext(DarkModeContext) as DarkModeDataInterface;

  const { DarkLogo } = SpotOnEntepriseGifsAndLogos;

  // Framer Motion setings
  const x = useSpring(0, { stiffness: 600, damping: 110 });
  const START_INDEX: number = -2470;

  const scrollYPosition = window.scrollY >= 1670 && window.scrollY <= 1760;

  // MOTION - TRANSFORMS
  const width = useTransform(x, [START_INDEX, 0], [320, 0]);
  const scale = useTransform(x, [-100, 0], [1.25, 1]);
  const fadeIn = useTransform(x, [-100, 0], [1, 0]);
  const fadeOut = useTransform(x, [-40, 0], [0, 1]);
  const up = useTransform(x, [-100, 0], [-100, 0]);

  // state
  const [state, setState] = useState<boolean>(false);
  const [showPing, setShowPing] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // overflow
  let targetElement = document.documentElement;

  useEffect(() => {
    // change state when dragged on x - axis is pass
    x.onChange(() => {
      x.get() > -90 ? setState(false) : setState(true);
    });
  }, [x]);

  // No scroll while drag state is active
  useEffect(() => {
    state
      ? targetElement?.classList.add("overflow-hidden")
      : targetElement?.classList.remove("overflow-hidden");
  });

  //  CLICK PING TO CLOSE
  useEffect(() => {
    !state ? setShowPing(true) : setShowPing(false);
  }, [state]);

  // Close event
  const handleCloseDrag = () => {
    setShowPing(true);
    x.stop();
    x.set(0);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // HANDLE SCROLL
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
        className="container mx-auto overflow-hidden duration-200 tablet:px-40 laptop:px-56"
      >
        <h2>WHAT WE OFFER</h2>
      </motion.div>

      {/* IMAGE CONTAINER */}
      <div className="relative tablet:hidden">
        <motion.span
          style={{ opacity: fadeIn }}
          className={state ? "background duration-100" : "hidden duration-100"}
        ></motion.span>
        {/* LOGO AND EXIT */}
        {state ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                default: { ease: "linear" },
              }}
              className="duration-100 drag-header"
            >
              <img
                src={state && !theme ? DarkLogo : DarkLogo}
                alt="SpotOnEnterprise Logo"
                className="w-40 h-12 brightness-150"
              />
              <div
                className={
                  state && !theme ? "close text-white relative" : "close "
                }
              >
                <WiMoonNew
                  id="circle"
                  size={62}
                  className={
                    showPing
                      ? "text-white duration-1000 animate-ping opacity-100 "
                      : "opacity-0 hidden duration-1000"
                  }
                />
                <AiOutlineClose
                  onClick={handleCloseDrag}
                  size={30}
                  className="absolute"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence></AnimatePresence>
        )}

        {/* IMAGE CONTAINER */}
        <div className="mb-4 image-container">
          <motion.div
            transition={{
              x: { duration: 0.5 },
              default: { ease: [1, 0.06, -0.06, 0.99] },
            }}
            style={{ x, scale }}
            drag={"x"}
            dragConstraints={{ left: START_INDEX, right: 0 }}
            dragElastic={0.07}
            className={
              scrollYPosition
                ? "duration-800 tablet:hidden grid-container duration-1000"
                : "duration-800 tablet:hidden grid-container blur-sm duration-1000"
            }
          >
            <motion.div
              style={scrollYPosition ? { x } : {}}
              drag={"x"}
              dragConstraints={{ left: START_INDEX, right: 0 }}
              dragElastic={0.07}
              className="absolute top-0 bottom-0 left-0  z-40 w-[5000px] sm:w-[6600px] h-96 tablet:hidden  opacity-0 duration-1000"
            ></motion.div>
            <ImageContainer />
          </motion.div>
        </div>

        {/* PROGRESS BAR CONTAINER */}
        <div className="max-w-xs mx-auto space-y-2 sm:px-2 sm:max-w-md tablet:hidden">
          <motion.div
            style={{ opacity: fadeOut }}
            className={
              scrollYPosition
                ? "flex items-center justify-end space-x-1 duration-1000 pt-2 opacity-100 animate-bounce"
                : "flex items-center justify-end space-x-1  duration-1000 pt-2 opacity-30"
            }
          >
            <span
              className={
                scrollYPosition
                  ? "text-bgPurple opacity-100 duration-1000 animate-pulse pt-4"
                  : "text-bgPurple opacity-60 duration-1000 pt-4 "
              }
            >
              <FaAngleLeft size={15} />
            </span>
            <h5
              className={
                scrollYPosition
                  ? "font-black text-right opacity-100 duration-500  text-[9px] pt-4"
                  : "font-black text-right opacity-70 text-[9px] pt-4 duration-500"
              }
            >
              Drag To Explore
            </h5>
          </motion.div>
          {/* PROGESS BAR */}
          <div
            className={
              state
                ? "drag-progress-background bg-slate-800"
                : "drag-progress-background bg-slate-200"
            }
          >
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
