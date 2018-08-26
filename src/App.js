import React from 'react';
import Board from './board.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timeoutID = null;

    this.state = {
      board: null
    };
  }

  evolve() {
    const currentBoard = this.state.board;
    currentBoard.updateBoard();
    this.setState({
      boardImage: currentBoard.showBoard()
    });
  }

  generateBoard(number) {
    var madeBoard = new Board(number);
    madeBoard.createBoard();
    this.setState({
      board: madeBoard,
      boardImage: madeBoard.showBoard()
    });

  }

  makeBoard() {
    return (
      <div className='boardGenerate'>
        <button onClick={()=>{this.generateBoard(9)}}> create 3 X 3 </button>
        <button onClick={()=>{this.generateBoard(81)}}> create 9 X 9 </button>
      </div>
    );
  }

  showBoard() {
    this.timeoutID = setTimeout(() => {return this.evolve();}, 750);
    return (
      <div className="board">
        {this.state.boardImage}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        { !this.state.board ? this.makeBoard() : null}
        { this.state.board ? this.showBoard() : null}
      </div>
    );
  }
}

export default App;
