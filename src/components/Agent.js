import React from 'react';

class Agent extends React.Component {

  serveNextTicket = event => {
    event.preventDefault();
    this.props.removeFromQueue()
  }
  render() {
    return (
      <form className="agent" onSubmit={this.serveNextTicket}>
        <div>Next </div>
        <div className="agent__input" id="next">{this.props.showNextServedTicket()}</div>
        <div>Queue</div><div>{this.props.getActiveQueue().length}</div>
        <button className="agent__button" type="submit">Take the next customer</button>
      </form >
    )
  }
}

export default Agent 