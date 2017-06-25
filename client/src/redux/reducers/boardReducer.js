import { START_GAME, UPDATE_BOARD } from '../actions/type';

const board = (state = {}, { type, boardState }) => {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        boardState,
      };
    case UPDATE_BOARD:
      return {
        ...state,
        boardState,
      };
    default:
      return state;
  }
};

export default board;
