import React from "react";

interface GameStatusProps {
  score: number;
}

const GameStatus: React.FC<GameStatusProps> = ({ score }) => {
  return (
    <div className="status-content">
      <h2>Status</h2>
      <div className="status-content-item">
        <h3>Score:</h3>
        <span>{score * 10}</span>
      </div>
      <div className="status-content-item">
        <h3>Speed:</h3>
        <span>X1</span>
      </div>
    </div>
  );
};

export default GameStatus;
