import Cell from './cell.js';

it('should return live if initalized to live', () => {
    var currentCell = new Cell(true);
    expect(currentCell.renderedDoc().props.className).toEqual('alive');
});

it('should kill a live cell if it has less than 2 live neighbors (underpopulation)', () => {
    var currentCell = new Cell(true);
    currentCell.aliveNeighbors(1);
    expect(currentCell.renderedDoc().props.className).toEqual('');
});

it('should kill a live cell if the neightbors have more than 3 live neighbors (overpopulation)', () => {
    var currentCell = new Cell(true);
    currentCell.aliveNeighbors(4);
    expect(currentCell.renderedDoc().props.className).toEqual('');
});

it('should keep a dead cell dead if they have more than 3 live neighbors (overpopulation)', () => {
    var currentCell = new Cell(false);
    currentCell.aliveNeighbors(4);
    expect(currentCell.renderedDoc().props.className).toEqual('');
});

it('should make a dead cell become alive if the cell has exactly 3 live neighbors (reproduction)', () => {
    var currentCell = new Cell(false);
    currentCell.aliveNeighbors(3);
    expect(currentCell.renderedDoc().props.className).toEqual('alive');
});
