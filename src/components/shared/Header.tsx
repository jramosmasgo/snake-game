import React from "react";
import { Logo } from "../../config/assets";
import "../styles.css";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="header-title">
        <img src={Logo} alt="" />
        <h1>SnakeGame</h1>
      </div>
      <div className="header-menu">
        <ul>
          <li>Game</li>
          <li>High Scores</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
