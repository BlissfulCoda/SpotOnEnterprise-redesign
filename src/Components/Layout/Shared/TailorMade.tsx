import { motion } from "framer-motion";
import { Animations } from "../Shared/Animation";

export default function TailorMade(): JSX.Element {
  return (
    <motion.div
      variants={Animations.tailorMade}
      className="absolute -rotate-90 -left-6 top-56 font-serif font-bold w-[700px] opacity-5 text-[117px] sm:left-12 tablet:text-[105px] tablet:left-72 tablet:top-[160px] laptop:left-[540px] laptop:text-[125px] laptop:top-[235px]
        desktop:left-[600px] 
        biggest:left-[680px] duration-100 "
    >
      Tailor Made
    </motion.div>
  );
}
