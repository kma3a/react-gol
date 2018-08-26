import Board from './board';
import Cell from './cell';

it('should create a board with three rows', ()=>{
    const currentBoard = new Board();
    currentBoard.createBoard();
    expect(currentBoard.showBoard().props.children.length).toEqual(3);
});

it('should show the prebuild board if one is passed in', ()=>{
  var liveSquares = [0];
    var board = createBoard(liveSquares);
    const currentBoard = new Board(board);
    expect(currentBoard.showBoard().props.children[0].props.children[0].props.className).toEqual('alive');
});

function createBoard(liveSquares) {
  var tempBoard = [];
  var row = [];
  
  for(var i = 0; i < 9; i++) {
    var alive = liveSquares.indexOf(i) > -1;
    console.log(alive);
    if(i%3===0 && row.length >0) {
      tempBoard.push(row);
      row = [];
    }
    var newCell = new Cell(alive);
    row.push(newCell);
  }
  tempBoard.push(row);
  return tempBoard

}


