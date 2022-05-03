import { Header } from "../components";
import withLoadingScreen from "../hoc/pageTransition";

const About = () => {
  return (
    <Header
      contents={["Hello", "About"]}
      customStyles={{ margin: "5px", fontSize: "7vw" }}
    />
  );
};

export default withLoadingScreen(About);
