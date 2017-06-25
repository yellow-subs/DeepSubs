import { START_GAME, UPDATE_BOARD } from './type';

export const newGame = boardState => ({
  type: START_GAME,
  boardState,
});

export const updateBoard = boardState => ({
  type: UPDATE_BOARD,
  boardState,
});
