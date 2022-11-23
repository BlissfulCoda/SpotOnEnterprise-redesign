import { delay, motion } from "framer-motion";

import HeroImage from "../../../assets/Images/HeroImage.png";

export default function MainImage(): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: "0%" }}
      animate={{
        opacity: "100%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.3, delay: 2.5 },
      }}
      className="relative"
    >
      <img
        src={HeroImage}
        alt="Hero Image"
        className="pl-2 absolute z-10 h-[800px] -mt-10 duration-1000 contrast-125 sm:absolute-none tablet:right-9 tablet:-mt-12 tablet:h-[600px] laptop:h-[780px] laptop:-mt-11 laptop:right-0 desktop:right-12 
            biggest:right-16 object-cover object-center"
      />
    </motion.div>
  );
}
