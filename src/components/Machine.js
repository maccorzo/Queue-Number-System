import React from 'react';

class Machine extends React.Component {


  createNewTicket = event => {
    event.preventDefault();
    const number = {
      active: true,
      number: 1,
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
          </div>
          <button type="submit" className="machine__button">Take a new number</button>
          <div>Queue: {Object.keys(this.props.queue).length}</div>
          <div>
            Waiting time:
          </div>
        </form>
      </div >
    )
  }
}

export default Machine