import React, { Component } from 'react';

class Cell extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.y == nextProps.prevY;
  }

  render() {
    const c = `cell ${this.props.alive ? "": "alive"}`;
    return (
      <div className={c}>
    </div>
    )
  }
}

export default class Row extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.x == nextProps.prevX;
  }

	render() {
		return (
			<div className="row">
        {this.props.row.map((cell, index) => {
          return (
            <Cell alive={cell} key={index} y={index} prevY={this.props.prevY} />
          ) 
        })}
      </div>
		)
	}
}
