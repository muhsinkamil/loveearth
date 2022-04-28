import { useState } from "react";
import { Header, Navbar } from "./components";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar leftLogo="LightHouse" rightItems={["WORK", "ABOUT", "CONTACT"]} />
      <Header
        contents={["Hello", "World"]}
        customStyles={{ margin: "5px", fontSize: "7vw" }}
      />
    </div>
  );
}

export default App;
