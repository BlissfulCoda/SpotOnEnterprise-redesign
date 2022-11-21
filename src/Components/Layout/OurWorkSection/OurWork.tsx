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
  const width = useTransform(x, [-2850, 0], [342, 0]);
  const scale = useTransform(x, [-100, 0], [1.25, 1]);
  const fadeIn = useTransform(x, [-120, 0], [1, 0]);
  const fadeOut = useTransform(x, [-20, 0], [0, 1]);
  const up = useTransform(x, [-100, 0], [-100, 0]);
  // state
  const [state, setState] = useState<boolean>(false);

  // overflow
  let targetElement = document.querySelector("html");

  useEffect(() => {
    // change state when dragged on x - axis is pass
    x.onChange(() => {
      x.get() > -40 ? setState(false) : setState(true);
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

  return (
    <section
      id="work"
      className="container px-6 py-12 mx-auto mb-20 space-y-4 space-y-6 duration-1000 tablet:px-0 sm:p-2 laptop:-space-y-4 biggest:max-w-6xl"
    >
      <motion.div
        style={{ translateY: up }}
        className="container mx-auto duration-100 tablet:px-40 laptop:px-56"
      >
        <h2>WHAT WE OFFER</h2>
      </motion.div>

      {/* BACKGROUND CONTAINER */}
      <div className="relative">
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
              <div className="close">
                <AiOutlineClose onClick={handleCloseDrag} />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence></AnimatePresence>
        )}
        {/* IMAGE CONTAINER */}
        <div className="w-[4000px] relative h-[490px] tablet:w-full tablet:h-full ">
          <motion.div
            transition={{
              x: { duration: 0.5 },
              default: { ease: [1, 0.06, -0.06, 0.99] },
            }}
            style={{ x, scale }}
            drag={"x"}
            dragConstraints={{ left: -2850, right: 0 }}
            dragElastic={0.05}
            className=" grid-container"
          >
            <ImageContainer />
          </motion.div>
        </div>

        {/* PROGRESS BAR CONTAINER */}
        <div className="max-w-sm mx-auto space-y-2 sm:px-2 sm:max-w-md ">
          <motion.div
            style={{ opacity: fadeOut, x }}
            className="flex items-center justify-end mb-4 space-x-2 animate-bounce "
          >
            <FaAngleLeft className="text-bgPurple animate-ping" />
            <h5 className="font-black text-right ">Drag To Explore</h5>
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
    </section>
  );
}

export default OurWork;
