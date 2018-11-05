import React from 'react';
import { formatNumber } from '../helpers'

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <span className="board__title">Now serving</span>
        <input
          type="text"
          className="board__active-number"
          readOnly
          value={this.props.activeNumber
            ? formatNumber(this.props.activeNumber)
            : '000'}
        />
      </div>
    )
  }
}

export default Board