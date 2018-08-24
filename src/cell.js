class Cell {
  constructor(alive){
    this.alive = alive;
  }
  //will return if the square is Alive or not
  isAlive() {
    return this.alive;
  }

  aliveNeighbors(numberOfLiveNeighbors) {
    if(numberOfLiveNeighbors < 2 || numberOfLiveNeighbors > 3) {
      this.alive = false;
    }
  }
}

export default Cell;
