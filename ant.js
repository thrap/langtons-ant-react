import React, { Component } from 'react';
import Row from './row';

const SIZE = 100;
const Direction = {
    UP: [0,-1],
    LEFT: [-1,0],
    DOWN: [0,1],
    RIGHT: [1,0]
}

class App extends Component {

  constructor(props) {
    super(props)

    var black = [];
    for (var i = 0; i<SIZE; i++) {
        var row = [];
        for (var j = 0; j<SIZE; j++) {
            row.push(false);
        }
        black.push(row);
    }

    this.state = {
        board: black,
        x: SIZE/2,
        y: SIZE/2,
        direction: Direction.UP,
    };

    setInterval(() => {
      this.move();
    }, 10); 
  }

  move() {
    console.log('hei')
    let { x, y, board, direction } = this.state;

    board[x][y] = !board[x][y];
    console.log(direction);

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
      direction
    })
  }

  render() {
    return (
      <div>
        {this.state.board.map((row, index) => {
          return (
            <Row key={index} row={row} />
          ) 
        })}
      </div>
    )
  }
}
React.render(<App />, document.getElementById('root'));



/*
    <div class="row" ng-repeat="row in board track by $index">
        <div class="cell" ng-repeat="cell in row track by $index" ng-class="{alive: cell==true}"></div>
    </div>
    <span>{{steps}}</span>


var SIZE = 100;
var Direction = {
    UP: [0,-1],
    LEFT: [-1,0],
    DOWN: [0,1],
    RIGHT: [1,0]
}

var App = React.createClass({

    doStep: function() {

    },

    getInitialState: function() {
        var black = [];
        for (var i = 0; i<SIZE; i++) {
            var row = [];
            for (var j = 0; j<SIZE; j++) {
                row.push(false);
            }
            black.push(row);
        }

        var Ant = function(x, y) {
            this.x = x;
            this.y = y;
            this.direction = Direction.UP;

            var this = this;
            this.move = function() {
                black[this.x][this.y] = !$scope.black[self.x][self.y];
                console.log(self.direction);

                if (black[self.x][self.y]) {
                    if (self.direction == Direction.UP) {
                        self.direction = Direction.LEFT;
                    } else if (self.direction == Direction.LEFT) {
                        self.direction = Direction.DOWN;
                    } else if (self.direction == Direction.DOWN) {
                        self.direction = Direction.RIGHT;
                    } else if (self.direction == Direction.RIGHT) {
                        self.direction = Direction.UP;
                    }
                } else {
                    if (self.direction == Direction.UP) {
                        self.direction = Direction.RIGHT;
                    } else if (self.direction == Direction.RIGHT) {
                        self.direction = Direction.DOWN;
                    } else if (self.direction == Direction.DOWN) {
                        self.direction = Direction.LEFT;
                    } else if (self.direction == Direction.LEFT) {
                        self.direction = Direction.UP;
                    }
                }
                self.x += self.direction[0];
                self.y += self.direction[1];
            }
        }

        var ant = new Ant(SIZE/2, SIZE/2);
        return {board: black, ant: ant};
    },
   render: function() {
        console.log(this.state.board);
        return React.createElement('div', null, 'Hello, world!')
    }
});
React.render(React.createElement(App), document.querySelectorAll('#root')[0])
*/