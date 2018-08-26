import React from 'react';
import Board from './board.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    var madeBoard = new Board();
    madeBoard.createBoard();
    console.log("I am the board", madeBoard);

    this.state = {
      board: madeBoard,
      boardImage: madeBoard.showBoard()
    };
  }

  evolve() {
    console.log("state", this.state);
    const currentBoard = this.state.board;
    currentBoard.updateBoard();
    this.setState({
      boardImage: currentBoard.showBoard()
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.boardImage}
        <button onClick={()=>{this.evolve()}}> Next Gen </button>
      </div>
    );
  }
}

export default App;
