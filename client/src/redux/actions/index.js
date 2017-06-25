import { newGame, updateBoard } from './boardAction';

// async action by Thunk
export const startNewGame = boardState => (dispatch) => {
  dispatch(newGame(boardState));
};

export const updateBoardAsync = boardState => (dispatch) => {
  dispatch(updateBoard(boardState))
}
