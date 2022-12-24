import { motion } from "framer-motion";
import { ImageList as Images } from "../../../Data/ComponentData";

export default function ImageGallery(): JSX.Element {
  return (
    <motion.div
      className="duration-1000 image-container"
      data-aos="fade-in"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration={2000 * 2}
      data-aos-delay={100}
      data-aos-once="true"
    >
      {Images.map((image, i) => (
        <img
          key={i}
          src={image.imageUrl}
          alt={image.alt}
          className={image.version}
          draggable="false"
        />
      ))}
    </motion.div>
  );
}
