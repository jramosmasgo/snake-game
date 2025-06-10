import React from "react";
import type { Direction, Point } from "../../interfaces/game";
import Board from "./components/Board";

const BOARD_SIZE = 20;
const INITIAL_SNAKE: Point[] = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = "RIGHT";

const getRandomFood = (): Point => ({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});

const Game: React.FC = () => {
  const [snake, setSnake] = React.useState<Point[]>(INITIAL_SNAKE);
  const [food, setFood] = React.useState<Point>(getRandomFood());
  const [direction, setDirection] =
    React.useState<Direction>(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = React.useState(false);
  const intervalRef = React.useRef<number>();

  const moveSnake = () => {
    const head = snake[0];
    let newHead: Point;

    switch (direction) {
      case "UP":
        newHead = { x: head.x, y: head.y - 1 };
        break;
      case "DOWN":
        newHead = { x: head.x, y: head.y + 1 };
        break;
      case "LEFT":
        newHead = { x: head.x - 1, y: head.y };
        break;
      case "RIGHT":
        newHead = { x: head.x + 1, y: head.y };
        break;
    }

    // Verificar colisiones
    if (
      newHead.x < 0 ||
      newHead.y < 0 ||
      newHead.x >= BOARD_SIZE ||
      newHead.y >= BOARD_SIZE ||
      snake.some(
        (segment) => segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    const newSnake = [newHead, ...snake];

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(getRandomFood());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  React.useEffect(() => {
    intervalRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(intervalRef.current);
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [direction]);

  return <Board size={BOARD_SIZE} food={food} snake={snake} />;
};

export default Game;
