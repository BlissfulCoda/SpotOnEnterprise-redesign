import { WiMoonNew } from "react-icons/wi";
import { FaAngleLeft } from "react-icons/fa";
import { useState, useEffect, useContext, useRef } from "react";

import { DarkModeDataInterface } from "../../../Data/DarkModeData";
import DarkModeContext from "../../../Context/DarkModeContext";
import { ImageList as Images } from "../../../Data/ComponentData";
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
  const START_INDEX: number = -2440;

  const scrollYPosition = window.scrollY >= 1700 && window.scrollY <= 1750;

  // MOTION - TRANSFORMS
  const width = useTransform(x, [START_INDEX, 0], [320, 0]);
  const scale = useTransform(x, [-100, 0], [1.25, 1]);
  const fadeIn = useTransform(x, [-100, 0], [1, 0]);
  const fadeOut = useTransform(x, [-20, 0], [0, 1]);
  const up = useTransform(x, [-100, 0], [-100, 0]);

  // state
  const [state, setState] = useState<boolean>(false);
  const [showPing, setShowPing] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const imageRef = useRef<HTMLDivElement>(null);

  // overflow
  let targetElement = document.documentElement;
  useEffect(() => {
    // change state when dragged on x - axis is pass
    x.onChange(() => {
      x.get() > -70 ? setState(false) : setState(true);
    });
  }, [x]);

  // No scroll while drag state is active
  useEffect(() => {
    if (state) {
      imageRef?.current!.classList.add("no-scroll");
      targetElement?.classList.add("no-scroll");
    } else {
      imageRef?.current!.classList.remove("no-scroll");
      targetElement?.classList.remove("no-scroll");
    }
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
      ref={imageRef}
      className="container relative px-6 mx-auto mb-20 space-y-3 overflow-hidden duration-1000 progressy-12 sm:p-2 laptop:-space-y-4 biggest:max-w-6xl"
    >
      <motion.div
        style={{ translateY: up }}
        className="container mx-auto duration-100 tablet:px-40 laptop:px-56"
      >
        <h2>WHAT WE OFFER</h2>
      </motion.div>

      {/* IMAGE CONTAINER */}
      <div className="relative sm:ml-3 tablet:hidden ">
        <motion.span
          style={{ opacity: fadeIn }}
          className={state ? "background duration-100" : "hidden duration-100"}
        ></motion.span>
        {state ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                default: { ease: "linear" },
              }}
              className="duration-500 drag-header"
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

        <div className="w-[2500px] h-[430px] relative tablet:hidden">
          <motion.div
            style={scrollYPosition ? { x, scale, cursor: "grab" } : {}}
            drag={scrollYPosition && "x"}
            transition={{ ease: "easeOut", duration: 1 }}
            dragDirectionLock
            dragConstraints={{ left: START_INDEX, right: 0 }}
            dragElastic={0.06}
            whileTap={{ cursor: "grabbing" }}
            className="w-full h-[420px] sm:h-[420px] flex space-x-3 p-2 absolute z-40"
          >
            {Images.map((image, i) => (
              <span className={`w-full h-full `} key={i}>
                <img
                  key={i}
                  src={image.imageUrl}
                  alt={image.alt}
                  className={`${image.version} `}
                  draggable="false"
                />
              </span>
            ))}
          </motion.div>
        </div>

        {/* PROGRESS BAR CONTAINER */}
        <div className="max-w-xs mx-auto space-y-2 sm:px-2 sm:max-w-md tablet:hidden">
          <motion.div
            style={{ opacity: fadeOut }}
            className={
              scrollYPosition
                ? "flex items-center justify-end space-x-1 duration-500 pt-2 animate-pulse"
                : "flex items-center justify-end space-x-1  duration-500 pt-2 "
            }
          >
            <span
              className={
                scrollYPosition
                  ? "text-bgPurple opacity-100 duration-1000  pt-4"
                  : "text-bgPurple opacity-60 duration-1000 pt-4 "
              }
            >
              <FaAngleLeft size={15} />
            </span>
            <button
              type="button"
              className={
                scrollYPosition
                  ? "font-black text-right opacity-100 duration-500  text-[9px] pt-4"
                  : "font-black text-right opacity-30 text-[9px] pt-4 duration-500"
              }
            >
              Click to Drag
            </button>
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
