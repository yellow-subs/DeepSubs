import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Chessboard from './Chessboard';
import { startNewGame } from '../redux/actions/index';

const initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

const App = props => (
  <div>
    <Chessboard />
    <button type="button" onClick={() => props.startNewGame(initialFen)}>Start Game</button>
  </div>
);

App.defaultProps = {
  startNewGame: propTypes.func,
};

App.propTypes = {
  startNewGame: propTypes.func,
};

export default connect(null, { startNewGame })(App);
