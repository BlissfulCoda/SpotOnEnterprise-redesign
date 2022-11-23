import { motion } from "framer-motion";

import { ImageList as Images } from "../../../Data/ComponentData";



export default function ImageContainer(): JSX.Element {
  const fullImageList = Images.map((image) => (
    <motion.div
      className="shadow-xl rounded-2xl"
      key={image.id}
      transition={{
        y: { duration: 0.5 },
        default: { ease: "linear" },
      }}
    >
      <img src={image.imageUrl} alt={image.alt} className={image.version} />
    </motion.div>
  ));
  return <div className="pl-3 duration-200 grid-container">{fullImageList}</div>;
}
