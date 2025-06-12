import { useEffect, useRef, useState } from "react";
import { BOARD_SIZE, INITIAL_SNAKE } from "../constants/gameInitial";
import type { Direction, Point } from "../interfaces/game";
import { getNextHead } from "../utils/directions";
import { getRandomFood } from "../utils/food";
import { CrashAudio, EatAudio } from "../config/assets";

export function useSnakeGame() {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Point>(getRandomFood(BOARD_SIZE));
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const intervalRef = useRef<number>();
  const audioEat = new Audio(EatAudio);
  const audioCrash = new Audio(CrashAudio);

  const move = () => {
    const newHead = getNextHead(snake[0], direction);

    const hitWall =
      newHead.x < 0 ||
      newHead.x >= BOARD_SIZE ||
      newHead.y < 0 ||
      newHead.y >= BOARD_SIZE;

    const hitSelf = snake.some((p) => p.x === newHead.x && p.y === newHead.y);

    if (hitWall || hitSelf) {
      audioCrash.play();
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    const ateFood = newHead.x === food.x && newHead.y === food.y;
    const newSnake = [newHead, ...snake];
    if (!ateFood) {
      newSnake.pop();
    } else {
      audioEat.play();
      setFood(getRandomFood(BOARD_SIZE));
      setScore((s) => s + 1);
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    intervalRef.current = setInterval(move, 200);
    return () => clearInterval(intervalRef.current);
  }, [snake, direction]);

  return {
    snake,
    food,
    direction,
    setDirection,
    gameOver,
    score,
  };
}
