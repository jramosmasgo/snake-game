import React from "react";
import type { Point } from "../../../interfaces/game";

interface BoardProps {
  size: number;
  food: Point;
  snake: Point[];
}

const Board: React.FC<BoardProps> = ({ size, food, snake }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${size},20px)`,
        gridTemplateColumns: `repeat(${size},20px)`,
        border: "2px solid var(--color-accent)",
        width: `${size * 20}px`,
      }}
    >
      {Array.from({ length: size * size }, (_, i) => {
        const x = i % size;
        const y = Math.floor(i / size);
        const isFood = food.x === x && food.y === y;
        const isSnake = snake.some((seg) => seg.x === x && seg.y === y);

        return (
          <div
            key={i}
            style={{
              width: 20,
              height: 20,
              backgroundColor: isSnake
                ? "var(--color-snake)"
                : isFood
                ? "var(--color-food)"
                : "",
              border: "1px solid var(--color-grid)",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Board;
