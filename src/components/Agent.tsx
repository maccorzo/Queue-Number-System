import React from 'react';
import { formatNumber } from '../helpers';

interface Props {
  removeFromQueue: () => void;
  showNextServedTicket: () => any;
  getActiveQueue: any;
  getWaitingTime: any;
}

class Agent extends React.Component<Props, {}> {
  serveNextTicket = (event: any) => {
    event.preventDefault();
    this.props.removeFromQueue();
  };
  render() {
    return (
      <form className="agent" onSubmit={this.serveNextTicket}>
        <div className="agent__info">
          <span>Queue: {this.props.getActiveQueue().length},</span>
          <span>Waiting time: {this.props.getWaitingTime()} min</span>
        </div>
        <button className="agent__button" type="submit">
          Take the next customer
        </button>
      </form>
    );
  }
}

export default Agent;
