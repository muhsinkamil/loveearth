import { motion } from "framer-motion";
import { Header, LoadingScreen } from "../components";
import withLoadingScreen from "../hoc/pageTransition";

const Home = () => {
  return (
    <motion.div exit={{ translateX: 500 }} transition={{ duration: 400 }}>
      <Header
        contents={["Hello", "World"]}
        customStyles={{ margin: "5px", fontSize: "7vw" }}
      />
    </motion.div>
  );
};

export default withLoadingScreen(Home);
