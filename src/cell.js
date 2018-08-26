import React from 'react';

class Cell {
  constructor(alive){
    this.alive = alive;
  }
  //will return if the square is Alive or not
  renderedDoc(uniqueKey) {
    var cName = this.alive ? 'alive' : '';
    return ( <div key={uniqueKey} className={cName}></div>);
  }

  aliveNeighbors(numberOfLiveNeighbors) {
    if(numberOfLiveNeighbors < 2 || numberOfLiveNeighbors > 3) {
      this.alive = false;
    }
    if( !this.alive && numberOfLiveNeighbors === 3) {
      this.alive = true;
    }
  }
}

export default Cell;
