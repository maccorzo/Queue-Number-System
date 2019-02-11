import React, { MouseEvent } from 'react';
import { formatNumber } from '../helpers';

interface Props {
  queue: any;
  addToQueue: any;
  largestNumber: number;
}

class Machine extends React.Component<Props, {}> {
  createNewTicket = (event: any): void => {
    event.preventDefault();
    const number = {
      active: true,
      number: this.props.queue.largestNumber,
      start: Date.now(),
      stop: 0,
      waitingTime: 0,
    };
    this.props.addToQueue(number);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.createNewTicket} className="machine">
          <div className="machine__number">
            {formatNumber(this.props.queue.largestNumber)}
          </div>
          <button type="submit" className="machine__button">
            Take ticket
          </button>
        </form>
      </div>
    );
  }
}

export default Machine;
