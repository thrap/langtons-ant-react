import React, { Component } from 'react';

class Cell extends Component {
  render() {
    const c = `cell ${this.props.alive ? "": "alive"}`;
    return (
      <div className={c}>
    </div>
    )
  }
}

export default class Row extends Component {
	render() {
		return (
			<div className="row">
        {this.props.row.map(cell => {
          return (
            <Cell alive={cell} />
          ) 
        })}
      </div>
		)
	}
}
