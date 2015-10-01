import React, { Component } from 'react';
import Row from './row';

const SIZE = 100;
const Direction = {
    UP: [0,-1],
    LEFT: [-1,0],
    DOWN: [0,1],
    RIGHT: [1,0]
}

var board = Array(...Array(SIZE)).map(() => Array(SIZE).fill(false));

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        x: SIZE/2,
        y: SIZE/2,
        direction: Direction.UP,
    };

    window.requestAnimationFrame(this.move.bind(this))
  }


  move() {
    let { x, y, direction } = this.state;

    board[x][y] = !board[x][y];

    if (board[x][y]) {
      if (direction == Direction.UP) {
        direction = Direction.LEFT;
      } else if (direction == Direction.LEFT) {
        direction = Direction.DOWN;
      } else if (direction == Direction.DOWN) {
        direction = Direction.RIGHT;
      } else if (direction == Direction.RIGHT) {
        direction = Direction.UP;
      }
    } else {
      if (direction == Direction.UP) {
        direction = Direction.RIGHT;
      } else if (direction == Direction.RIGHT) {
        direction = Direction.DOWN;
      } else if (direction == Direction.DOWN) {
        direction = Direction.LEFT;
      } else if (direction == Direction.LEFT) {
        direction = Direction.UP;
      }
    }
    
    this.setState({
      x: x + direction[0], 
      y: y + direction[1],
      prevX: x,
      prevY: y,
      direction
    })

    window.requestAnimationFrame(this.move.bind(this))
  }

  render() {
    return (
      <div>
        {board.map((row, index) => {
          return (
            <Row key={index} row={row} x={index} prevX={this.state.prevX} prevY={this.state.prevY} />
          ) 
        })}
      </div>
    )
  }
}
React.render(<App />, document.getElementById('root'));
