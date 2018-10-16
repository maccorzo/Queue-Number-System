import React from 'react';

class Machine extends React.Component {
  createNewNumber = event => {
    event.preventDefault();
    const number = {
      active: true,
      number: this.props.largestNumber,
      start: Date.now(),
      stop: 0,
      waitingTime: 0,
    }
    this.props.addToQueue(number);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.createNewNumber} className="machine">
          <div>Number</div>
          <div className="machine__number">
            {this.props.largestNumber.toString().slice(-3)}
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