import { motion } from "framer-motion";
import { Header, LoadingScreen } from "../components";
import withLoadingScreen from "../hoc/pageTransition";
import "../styles/reusableStyles.scss";

const Home = () => {
  return (
    <motion.div
      exit={{ translateX: 500 }}
      transition={{ duration: 400 }}
      className="std-container"
    >
      <Header
        contents={
          // ["A", "DIGITAL", "DESIGN", "STUDIO"],
          // ["DRIVEN", "BY", "RESEARCH", "&"],
          // ["STRATEGY"],
          [
            "A",
            "DIGITAL",
            "DESIGN",
            "STUDIO",
            "DRIVEN",
            "BY",
            "RESEARCH",
            "&",
            "STRATEGY",
          ]
        }
        customContainerStyles={{ margin: "5px", paddingTop: "6vw" }}
        customStyles={{ fontSize: "3.5vw" }}
      />
    </motion.div>
  );
};

export default withLoadingScreen(Home);
