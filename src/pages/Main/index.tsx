import React from "react";
import Header from "./components/Header";
import "./styles.css";
import Game from "../Game";

const Main: React.FunctionComponent = () => {
  return (
    <div className="main">
      <div className="main-content">
        <Header />
        <Game />
      </div>
    </div>
  );
};

export default Main;
