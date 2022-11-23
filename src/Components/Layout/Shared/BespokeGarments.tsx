import { motion } from "framer-motion";
import { Animations } from "../Shared/Animation";

interface Letters {
  title: string;
  styling: string;
}

export default function BespokeGarments({
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
  console.log(words);

  return (
    <>
      {words.map((word, index) => {
        return (
          <motion.span
            variants={Animations.title}
            className={styling}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}
