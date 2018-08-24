import Cell from './cell.js';

it('should return live if initalized to live', () => {
    var currentCell = new Cell(true);
    expect(currentCell.isAlive()).toEqual(true);
});

it('should die if it has less than 2 live neighbors', () => {
    var currentCell = new Cell(true);
    currentCell.aliveNeighbors(1);
    expect(currentCell.isAlive()).toEqual(false);
});
