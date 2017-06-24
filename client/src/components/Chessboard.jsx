import React from 'react';
import Board from 'react-chessdiagram';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { startNewGame } from '../redux/actions/index';
import styles from '../styles/styles';



function onMovePiece(piece, fromSquare, toSquare) {
	let message = 'You moved ' + piece + fromSquare + ' to ' + toSquare + ' !';
	console.log(message);
}
const whitePos =
  ['R@a1', 'N@b1', 'B@c1', 'Q@d1', 'K@e1', 'B@f1', 'N@g1', 'R@h1',
    'P@a2', 'P@b2', 'P@c2', 'P@d2', 'P@e2', 'P@f2', 'P@g2', 'P@h2'];
const blackPos =
  ['r@a8', 'n@b8', 'b@c8', 'q@d8', 'k@e8', 'b@f8', 'n@g8', 'r@h8',
    'p@a7', 'p@b7', 'p@c7', 'p@d7', 'p@e7', 'p@f7', 'p@g7', 'p@h7'];

class Chessboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Board
        fen={this.props.boardState}
        pieces={whitePos.concat(blackPos)}
        onMovePiece={onMovePiece}
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

Chessboard.propTypes = {
  boardState: propTypes.string,
};
Chessboard.defaultProps = {
  boardState: '',
};

export default connect(mapStateToProps, { startNewGame })(Chessboard);
