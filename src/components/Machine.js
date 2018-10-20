import React from 'react';

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
          <div>Number</div>
          <div className="machine__number">
            {this.props.queue.largestNumber}
          </div>
          <button type="submit" className="machine__button">Take a new number</button>
          <div>Queue: {this.props.getActiveQueue().length}</div>
          <div>
            Waiting time:
          </div>
        </form>
      </div >
    )
  }
}

export default Machine