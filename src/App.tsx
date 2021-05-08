import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SplashPage from "./components/SplashPage/SplashPage";
import "./App.less";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navbar />
      <SplashPage />
    </div>
  );
};

export default App;
