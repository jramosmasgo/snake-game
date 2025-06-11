import type { Point } from "../interfaces/game";

export function getRandomFood(boardSize: number): Point {
  return {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  };
}
