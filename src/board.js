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
    var row =[];

    for(var i=0; i < this.boardSize; i++) {
      if( i % this.sqroot === 0 && row.length > 0) {
        this.board.push(row);
        row = [];
      }
      var rowIndex = i %  this.sqroot;
      var trueOrFalse = !!randomInt(2);
      row[rowIndex] = new Cell(trueOrFalse);
    }
    this.board.push(row);
  }

  renderRow(row) {
    var oneRow = [];
     row.map((thisCell) => {
          oneRow.push(this.renderCell(thisCell));
      })
     console.log(oneRow);
     return (
         <div class='row'>
           {oneRow}
         </div>
     );
  }
  renderCell(cell) {
    return (cell.renderedDoc());
  }

  showBoard() {
    var boardRows =[];
    this.board.map((row) => { boardRows.push(this.renderRow(row))});
    return (
      <div class="board">
        {boardRows}
      </div>
    );
  }

}

export default Board;
