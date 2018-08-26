import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './board.js';
import './App.css';

class App extends Component {
  render() {
    const currentBoard = new Board();
    currentBoard.createBoard();
    var board = currentBoard.showBoard();
    return (
      <div className="App">
        {board}
      </div>
    );
  }
}

export default App;
