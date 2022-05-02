import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./components";
import { About, Home } from "./pages";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          leftLogo="LightHouse"
          rightItems={[
            { item: "WORK", navigateTo: "/work" },
            { item: "ABOUT", navigateTo: "/about" },
            { item: "CONTACT", navigateTo: "/contact" },
          ]}
        />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
