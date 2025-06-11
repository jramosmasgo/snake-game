import type { Direction, Point } from "../interfaces/game";

export const BOARD_SIZE = 20;
export const INITIAL_SNAKE: Point[] = [{ x: 10, y: 10 }];
export const INITIAL_DIRECTION: Direction = "RIGHT";

export const getRandomFood = (): Point => ({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});
