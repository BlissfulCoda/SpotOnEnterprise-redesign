import { motion } from "framer-motion";
import {Animations} from '../../Shared/Animation'

import HeroImage from "../../../assets/Images/HeroImage.png";

export default function MainImage(): JSX.Element {
  return (
    <motion.div variants={Animations.picture} className="relative">
      <img
        src={HeroImage}
        alt="Hero Image"
        className="pl-8 absolute z-10 h-[700px] -mt-10 duration-1000 contrast-125 sm:absolute-none tablet:right-9 tablet:-mt-12 tablet:h-[600px] laptop:h-[780px] laptop:-mt-11 laptop:right-0 desktop:right-12 
            biggest:right-24 object-cover object-center"
      />
    </motion.div>
  );
}
