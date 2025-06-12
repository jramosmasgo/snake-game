import React from "react";
import Board from "./components/Board";
import { BOARD_SIZE } from "../../constants/gameInitial";
import { useSnakeGame } from "../../hooks/useSnakeGame";
import GameStatus from "./components/GameStatus";
import "./styles.css";

const Game: React.FC = () => {
  const { snake, food, direction, setDirection, gameOver, score } =
    useSnakeGame();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver, setDirection]);

  return (
    <div className="board-content">
      <Board size={BOARD_SIZE} food={food} snake={snake} />
      <GameStatus score={score} />
    </div>
  );
};

export default Game;
