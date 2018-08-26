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

it('should return the amount of neightbors that is there only one alive', ()=>{
  var liveSquares = [0];
    var board = createBoard(liveSquares);
    const currentBoard = new Board(board);
    expect(currentBoard.countNeighbors({x:0, y:0})).toEqual(0);
    expect(currentBoard.countNeighbors({x:1, y:1})).toEqual(1);
});

it('should return the amount of neightbors that is there more than one alive', ()=>{
  var liveSquares = [0, 2, 5,6];
    var board = createBoard(liveSquares);
    const currentBoard = new Board(board);

    expect(currentBoard.countNeighbors({x:0, y:0})).toEqual(0);
    expect(currentBoard.countNeighbors({x:1, y:1})).toEqual(4);
    expect(currentBoard.countNeighbors({x:1, y:2})).toEqual(1);
});

it('should kill the one live cell for having no neightbors', ()=>{
  var liveSquares = [0];
    var board = createBoard(liveSquares);
    const currentBoard = new Board(board);
    currentBoard.updateBoard();
    expect(currentBoard.showBoard().props.children[0].props.children[0].props.className).toEqual('');
});

function createBoard(liveSquares) {
  var tempBoard = [];
  var row = [];
  
  for(var i = 0; i < 9; i++) {
    var alive = liveSquares.indexOf(i) > -1;
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


