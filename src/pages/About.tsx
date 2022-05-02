import { Header } from "../components";

const About = () => {
  return (
    <Header
      contents={["Hello", "About"]}
      customStyles={{ margin: "5px", fontSize: "7vw" }}
    />
  );
};

export default About;
