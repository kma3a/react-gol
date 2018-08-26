import React from 'react';
import Cell from './cell.js';


class Board {
  constructor(prebuiltBoard) {
    this.boardSize = 9;
    this.sqroot = Math.sqrt(this.boardSize);
    this.board = prebuiltBoard || [];
    this.neighborBoard = [];
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

  getListOfNeighbors() {
    this.board.forEach((row, indexX) => {
      row.forEach((cell, indexY)=>{
       this.neighborBoard.push({
          index: {x: indexX, y: indexY}, 
          neighbors: this.countNeighbors({x: indexX, y: indexY})
       }); 
      });
    });
  }

  updateBoard() {
    this.getListOfNeighbors();
    this.neighborBoard.forEach((cellInfo)=>{
      var index = cellInfo.index;
      this.board[index.x][index.y].aliveNeighbors(cellInfo.neighbors);
    });

  }

  //x in this case will be the row
  //y will be the column
  countNeighbors(index) {
    var aliveNeighborCount = 0;
    var neighborList = [
      {x:-1, y:-1}, {x:0, y:-1},{x:1, y:-1},
      {x:0, y:-1}, null,{x:1, y:1},
      {x:1,  y:-1}, {x:0, y:1},{x:1, y:1} 
    ];

    neighborList.forEach((cellCoord) => {
        if(!cellCoord) { return;}
        var neighborX = index.x + cellCoord.x;
        var neighborY = index.y + cellCoord.y;
        //will return if the item is out of bounds
        if( neighborX < 0 || neighborY < 0 || neighborX > (this.sqroot -1 ) || neighborY > (this.sqroot - 1)) {
          return;
        }

        var square = this.board[neighborX][neighborY];
        if(square.alive) {
          aliveNeighborCount++;
        }

    });

    return aliveNeighborCount;
  }

  renderRow(row) {
    var oneRow = [];
     row.map((thisCell) => {
          oneRow.push(this.renderCell(thisCell));
      })
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
