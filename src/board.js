import React from 'react';
import Cell from './cell.js';


class Board {
  constructor(prebuiltBoard) {
    this.boardSize = this.getBoardSize(prebuiltBoard);
    this.sqroot = Math.sqrt(this.boardSize);
    this.board = prebuiltBoard && Array.isArray(prebuiltBoard) ? prebuiltBoard : [];
    this.neighborBoard = [];
  }

  getBoardSize(board) {
    var size = 9
    if(Array.isArray(board)) {

      size = board.length * board.length;
    }
    if(typeof board === 'number') {
      size = board;
    }
    return size;
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
    row = [];
    return;
  }

  updateBoard() {
    this.board.forEach((row, indexX) => {
      return row.forEach((cell, indexY)=>{
       return this.neighborBoard.push({
          index: {x: indexX, y: indexY}, 
          neighbors: this.countNeighbors({x: indexX, y: indexY})
       }); 
      });
    });
    this.updateNeighbors();
  }
  
  updateNeighbors() {
    this.neighborBoard.forEach((cellInfo)=>{
      var index = cellInfo.index;
      return this.board[index.x][index.y].aliveNeighbors(cellInfo.neighbors);
    });

  }

  //x in this case will be the row
  //y will be the column
  countNeighbors(index) {
    var aliveNeighborCount = 0;
    var neighborList = [
      {x:-1, y:-1}, {x:-1, y:0},{x:-1, y:1},
      {x:0, y:-1}, null , {x:0, y:1},
      {x:1,  y:-1}, {x:1, y:0},{x:1, y:1} 
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

  renderRow(row, otherIndex) {
    var oneRow = [];
     row.map((thisCell, index) => {
        var uniqueKey = otherIndex.toString() + index.toString();
        return oneRow.push(this.renderCell(thisCell, uniqueKey));
      })
     return (
         <div key={otherIndex} className='row'>
           {oneRow}
         </div>
     );
  }
  renderCell(cell, uniqueKey) {
    return (cell.renderedDoc(uniqueKey));
  }

  showBoard() {
    var boardRows =[];
    this.board.map((row,index) => { return boardRows.push(this.renderRow(row, index))});
    return (
      <div className="board">
        {boardRows}
      </div>
    );
  }

}

export default Board;
