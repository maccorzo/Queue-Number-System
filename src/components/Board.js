import React from 'react';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <input type="text" className="board__active-number" readOnly value={this.props.activeNumber.toString().slice(-3)} />
      </div>
    )
  }
}

export default Board