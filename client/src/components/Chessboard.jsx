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
    this.engine = new Chess();
    this.onMovePiece = this.onMovePiece.bind(this);
    this.state = {
      board: this.props.boardState,
    }
  }

  onMovePiece(piece, from, to) {
    const chessObj = {
      piece,
      from,
      to,
    };
    this.engine.move(chessObj);
    const newBoard = this.engine.fen();
    this.props.updateBoardAsync(newBoard);
  }

  render() {
    return (
      <Board
        fen={this.props.boardState}
        // fen={this.state.board}
        onMovePiece={this.onMovePiece}
        squareSize={styles.board.size}
        lightSquareColor={styles.board.light}
        darkSquareColor={styles.board.dark}
      />
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
};
Chessboard.defaultProps = {
  boardState: '',
};
