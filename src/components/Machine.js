import React from 'react';
import { formatNumber } from '../helpers'

class Machine extends React.Component {


  createNewTicket = event => {
    event.preventDefault();
    const number = {
      active: true,
      number: this.props.queue.largestNumber,
      start: Date.now(),
      stop: 0,
      waitingTime: 0,
    }
    this.props.addToQueue(number);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.createNewTicket} className="machine">
          <div>Queue: {this.props.getActiveQueue().length},
            Waiting time: {this.props.getWaitingTime()} min
          </div>
          <div className="machine__number">
            {formatNumber(this.props.queue.largestNumber)}
          </div>
          <button type="submit" className="machine__button">
            Take ticket
          </button>
        </form>
      </div >
    )
  }
}

export default Machine