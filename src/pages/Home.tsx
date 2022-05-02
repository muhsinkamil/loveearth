import { Header } from "../components";

const Home = () => {
  return (
    <Header
      contents={["Hello", "World"]}
      customStyles={{ margin: "5px", fontSize: "7vw" }}
    />
  );
};

export default Home;
