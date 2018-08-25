import Board from './board';
import Cell from './cell.js';

it('should create a board', ()=>{
  const currentBoard = new Board();
  currentBoard.createBoard();
  expect(currentBoard.showBoard().props.children.length).toEqual(3);
});
