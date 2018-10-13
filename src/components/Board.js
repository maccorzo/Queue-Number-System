import React from 'react';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <input type="text" className="board__active-number" readonly value="42" />
      </div>
    )
  }
}

export default Board