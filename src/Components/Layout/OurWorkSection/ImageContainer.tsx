
import { motion } from "framer-motion";

import { ImageList as Images } from "../../../Data/ComponentData";

export default function ImageContainer(): JSX.Element {
  const fullImageList = Images.map((image) => (
    <motion.div
      className="overflow-y-hidden rounded-2xl image-container"
      key={image.id}
      transition={{
        y: { duration: 0.5 },
        default: { ease: "linear" },
      }}
    >
      <img src={image.imageUrl} alt={image.alt} className={image.version} />
    </motion.div>
  ));
  return <div className="duration-200 grid-container ">{fullImageList}</div>;
}
