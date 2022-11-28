import React, { useState, useEffect } from "react";
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

  const [windowSize, setWindowSize] = useState(getWindowSize())

  function getWindowSize() {
    return window.innerWidth;
  }

  useEffect(() => {
    function handleWindleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindleResize);

    return () => {
      window.removeEventListener('resize', handleWindleResize);
    }
  }, [])

  // Add space to words
  words.map((words) => {
    return words.push("\u00A0");
  });

  return (
    <>
      {words.map((word, index) => {
        return (
          <motion.span
            variants={
              window.innerWidth > 767
                ? Animations.DesktopTitle
                : Animations.mobileTitle
            }
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
