import React from 'react';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <input
          type="text"
          className="board__active-number"
          readOnly
          value={this.props.showNextServedTicket() !== 'empty'
            ? this.props.showNextServedTicket() - 1
            : '000'}
        />
      </div>
    )
  }
}

export default Board