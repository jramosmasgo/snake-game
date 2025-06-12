import React from "react";
import Game from "../../pages/Game";
import Header from "../../components/shared/Header";
import "../styles.css";

const HomeTemplate: React.FC = () => {
  return (
    <div className="main">
      <div className="main-content">
        <Header />
        <Game />
      </div>
    </div>
  );
};

export default HomeTemplate;
