import React from 'react';
import { connect } from 'react-redux';
import Chessboard from './Chessboard';
import { startNewGame } from '../redux/actions/index';
import Chatterbox from './Chatterbox';

const App = () => (
  <div>
    <Chessboard />
    <Chatterbox />
  </div>
);


export default connect(null, { startNewGame })(App);
