import { motion } from "framer-motion";
import { ImageList as Images } from "../../../Data/ComponentData";

export default function ImageContainer(): JSX.Element {
  const fullImageList = Images.map((image, i) => (
    <motion.div
      data-aos="fade-in"
      data-aos-once="true"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration={2000 * (i + 2)}
      data-aos-delay={100 * i}
      className="overflow-y-hidden duration-1000 rounded-2xl image-container"
      key={image.id}
    >
      <img src={image.imageUrl} alt={image.alt} className={image.version} />
    </motion.div>
  ));
  return <div className="duration-1000 grid-container ">{fullImageList}</div>;
}
