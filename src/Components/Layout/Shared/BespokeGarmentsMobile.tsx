import { motion } from "framer-motion";
import { Animations } from "./Animation";

interface Letters {
  title: string;
  styling: string;
}

export default function BespokeGarmentsMobile({
  title,
  styling,
}: Letters): JSX.Element {
  // Split array words
  const splitWords: string[] = title.split(" ");

  // Split words into letters
  const words: string[][] = splitWords.map((word) => word.split(""));

  // Add space to words
  words.map((words) => {
    return words.push("\u00A0");
  });

  return (
    <>
      {words.map((word, index) => {
        return (
          <motion.span
            variants={Animations.mobileTitle}
            className={`${styling}`}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}
