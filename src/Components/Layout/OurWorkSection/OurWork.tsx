import { useState, useEffect } from "react";

import { FaAngleLeft } from "react-icons/fa";
import { motion, useSpring, useTransform } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { ImageList } from "../../../Data/ComponentData";

function OurWork(): JSX.Element {
  const x = useSpring(0, { stiffness: 900, damping: 150 });
  const width = useTransform(x, [-2850, 0], [342, 0]);
  const scale = useTransform(x, [-100, 0], [1.15, 1]);
  const fadeIn = useTransform(x, [-100, 1], [0.5, 0]);
  // state
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    // change state when dragged on x - axis is pass -100px
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true);
    });
  }, [x]);

  return (
    <section
      id="work"
      className="container px-6 py-12 mx-auto mb-12 space-y-4 duration-1000 tablet:px-0 sm:p-2 laptop:-space-y-4 biggest:max-w-6xl"
    >
      <div className="container mx-auto tablet:px-40 laptop:px-56">
        <h2>WHAT WE OFFER</h2>
      </div>

      {/* BACKGROUND CONTAINER */}
      <div className="relative">
        {/* BACKGROUND */}
        <motion.div
        style={{ opacity: fadeIn }}
          className="background"
        ></motion.div>
        <div className="drag-header">
          <div className="logo">SpotOnEnterprise</div>
          <div className="close">
            <AiOutlineClose />
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="w-[4000px] relative h-[490px] tablet:w-full tablet:h-full ">
          <motion.div
            transition={{
              x: { duration: 0.5 },
              default: { ease: "linear" },
            }}
            style={{ x, scale }}
            drag={"x"}
            dragConstraints={{ left: -2850, right: 0 }}
            dragElastic={0.05}
            className="duration-200 grid-container"
          >
            {ImageList.map((image) => (
              <div key={image.id}>
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  className={image.version}
                />
              </div>
            ))}
          </motion.div>
        </div>
        {/* PROGRESS BAR CONTAINER */}
        <div className="space-y-2 sm:px-3">
          <div className="flex items-center justify-end mb-4 space-x-1">
            <FaAngleLeft className="text-bgPurple" />
            <h5 className="font-black text-right opacity-100">
              Drag To Enlarge
            </h5>
          </div>

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
