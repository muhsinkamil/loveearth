import { useState } from "react";
import "./App.scss";
import { Header } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header
        contents={["Hello", "World"]}
        customStyles={{ margin: "5px", fontSize: "7vw" }}
      />
    </div>
  );
}

export default App;
