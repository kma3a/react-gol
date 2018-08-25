import React from 'react';
import Cell from './cell.js';


class Board {
  constructor() {
    this.boardSize = 9;
    this.sqroot = Math.sqrt(this.boardSize);
    this.board = [];
  }
  createBoard() {
    var randomInt = (max) => { return Math.floor(Math.random() * Math.floor(max));}

    for(var i=0; i < this.boardSize; i++) {
      var trueOrFalse = !!randomInt(2);
      this.board[i] = new Cell(trueOrFalse);
    }
  }

  getCell(index) {
    return this.board[index].renderedDoc();
  }


  showBoard() {
    return (
        <div class="board">
          <div class="row">
            {this.getCell(0)}
            {this.getCell(1)}
            {this.getCell(2)}
          </div>
          <div class="row">
            {this.getCell(3)}
            {this.getCell(4)}
            {this.getCell(5)}
          </div>
          <div class="row">
            {this.getCell(6)}
            {this.getCell(7)}
            {this.getCell(8)}
          </div>
        </div>
      );

  }

}

export default Board;
