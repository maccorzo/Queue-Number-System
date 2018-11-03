import React from 'react';
import { formatNumber } from '../helpers'

class Agent extends React.Component {

  serveNextTicket = event => {
    event.preventDefault();
    this.props.removeFromQueue()
  }
  render() {
    return (
      <form className="agent" onSubmit={this.serveNextTicket}>
        <div className="agent__info">
          <span>Next: {formatNumber(this.props.showNextServedTicket())}, </span>
          <span>Queue: {this.props.getActiveQueue().length}</span>
        </div>
        <button className="agent__button" type="submit">Take the next customer</button>
      </form >
    )
  }
}

export default Agent 