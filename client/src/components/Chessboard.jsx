import React from 'react';
import Board from 'react-chessdiagram';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Chess from 'chess.js';

import { startNewGame, updateBoardAsync } from '../redux/actions/index';
import styles from '../styles/styles';

class Chessboard extends React.Component {
  constructor(props) {
    super(props);
    this.engine = null;
    this.onMovePiece = this.onMovePiece.bind(this);
    this.initBoard = this.initBoard.bind(this);
  }

  onMovePiece(piece, from, to) {
    this.engine.move({ piece, from, to });
    this.props.updateBoardAsync(this.engine.fen());
  }

  initBoard() {
    if (!this.engine) {
      this.engine = new Chess();
    } else {
      this.engine.reset();
    }
    this.props.startNewGame();
  }

  render() {
    return (
      <div>
        <Board
          fen={this.props.boardState}
          onMovePiece={this.onMovePiece}
          squareSize={styles.board.size}
          lightSquareColor={styles.board.light}
          darkSquareColor={styles.board.dark}
        />
        <button onClick={this.initBoard}>Start New Game</button>
      </div>
    );
  }
}

const mapStateToProps = ({ board }) => {
  const { boardState } = board;
  return {
    boardState,
  };
};


export default connect(mapStateToProps, { startNewGame, updateBoardAsync })(Chessboard);

Chessboard.propTypes = {
  boardState: propTypes.string,
  updateBoardAsync: propTypes.func,
  startNewGame: propTypes.func,
};
Chessboard.defaultProps = {
  boardState: '',
  updateBoardAsync: propTypes.func,
  startNewGame: propTypes.func,
};
