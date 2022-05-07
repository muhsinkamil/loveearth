import { motion } from "framer-motion";

type Props = {
  contents: string[];
  customContainerStyles?: { [key: string]: string };
  customStyles?: { [key: string]: string };
  customContainerAnimation?: any;
  customListItemAnimation?: any;
};

// const getContainerStyles = (customAnimation?: any) => ({
//   show: {
//     transition: {
//       staggerChildren: 2,
//     },
//   },
//   ...customAnimation,
// });

const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { y: 400 },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// const getListItemStyles = (hiddenY: number, customAnimation?: any) => ({
//   hidden: { y: hiddenY },
//   show: {
//     y: 0,
//     transition: {
//       duration: 5,
//     },
//   },
//   // ...customAnimation,
// });

const Header = ({
  contents,
  customContainerStyles,
  customStyles,
  customContainerAnimation,
  customListItemAnimation,
}: Props) => {
  return (
    // <>
    //   <motion.h1
    //     style={{
    //       fontWeight: "normal",
    //       display: "flex",
    //       flexDirection: "column",
    //       overflow: "hidden",
    //       ...customStyles,
    //     }}
    //   >
    //     {contents.map((line, x) => (
    //       <motion.div
    //         variants={container}
    //         initial="hidden"
    //         animate="show"
    //         style={{ overflow: "hidden" }}
    //       >
    //         {line.map((word, i) => (
    //           <motion.span
    //             key={i}
    //             variants={listItem}
    //             style={{ display: "inline-block", overflow: "hidden" }}
    //           >
    //             <span style={{ overflow: "hidden" }}>{word}</span>
    //             <div
    //               style={{ display: "inline-block", padding: "0 10px 0 0" }}
    //             ></div>
    //           </motion.span>
    //         ))}
    //       </motion.div>
    //     ))}
    //   </motion.h1>
    // </>
    <>
      <motion.h1
        style={{
          fontWeight: "normal",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          ...customStyles,
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ overflow: "hidden" }}
        >
          {contents.map((line, x) => (
            <div style={{ overflow: "hidden", display: "inline-block" }}>
              <motion.span
                variants={listItem}
                style={{ display: "inline-block", overflow: "hidden" }}
              >
                <span style={{ overflow: "hidden" }}>{line}</span>
                <div
                  style={{ display: "inline-block", padding: "0 10px 0 0" }}
                ></div>
              </motion.span>
            </div>
          ))}
        </motion.div>
      </motion.h1>
    </>
    /* <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ overflow: "hidden" }}
      >
        {contents.map((letter, x) => (
          <span>
            {letter.map((item, i) => (
              <motion.h1
                key={i}
                variants={listItem}
                style={{
                  display: "inline-block",
                  margin: "5px",
                  fontSize: "3.5vw",
                  fontWeight: "normal",
                  overflow: "hidden",
                }}
              >
                {item}
              </motion.h1>
            ))}
          </span>
        ))}
      </motion.div> */
  );
};

export default Header;
