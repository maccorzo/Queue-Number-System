import React from 'react';
import { formatNumber } from '../helpers';

interface Props {
  activeNumber: number;
}

const Board: React.StatelessComponent<Props> = props => {
  return (
    <div className="board">
      <span className="board__title">Now serving</span>
      <input
        type="text"
        className="board__active-number"
        readOnly
        value={props.activeNumber ? formatNumber(props.activeNumber) : '000'}
      />
    </div>
  );
};

export default Board;
