import React from "react";
import { motion } from "framer-motion";

type Props = {
  contents: string[];
  customStyles?: { [key: string]: string };
  customContainerAnimation?: any;
  customListItemAnimation?: any;
};

const getContainerStyles = (customAnimation?: any) => ({
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  ...customAnimation,
});

const getListItemStyles = (customAnimation?: any) => ({
  hidden: { y: 400 },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
  ...customAnimation,
});

export const Header = ({
  contents,
  customStyles,
  customContainerAnimation,
  customListItemAnimation,
}: Props) => {
  return (
    <motion.div
      variants={getContainerStyles(customContainerAnimation)}
      initial="hidden"
      animate="show"
      style={{ overflow: "hidden" }}
    >
      {contents.map((letter, i) => (
        <motion.h1
          key={i}
          variants={getListItemStyles(customListItemAnimation)}
          style={{
            display: "inline-block",
            fontWeight: "normal",
            ...customStyles,
          }}
        >
          {letter}
        </motion.h1>
      ))}
    </motion.div>
  );
};
