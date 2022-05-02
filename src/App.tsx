import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import { About, Home } from "./pages";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar leftLogo="LightHouse" rightItems={["WORK", "ABOUT", "CONTACT"]} />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
