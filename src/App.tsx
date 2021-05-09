import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SplashPage from "./components/SplashPage/SplashPage";
import AboutPage from "./components/AboutPage/AboutPage";
import "./App.less";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
