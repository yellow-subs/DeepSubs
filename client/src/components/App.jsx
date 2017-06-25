import React from 'react';
import { connect } from 'react-redux';
import Chessboard from './Chessboard';
import { startNewGame } from '../redux/actions/index';

const App = () => (
  <div>
    <Chessboard />
  </div>
);



export default connect(null, { startNewGame })(App);
