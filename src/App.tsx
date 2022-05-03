import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { About, Home } from "./pages";
import "./App.scss";

function App() {
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
        <div className="app-routes">
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;