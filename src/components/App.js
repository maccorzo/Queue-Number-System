import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import base from '../base';

import '../static/css/style.css';
import Board from './Board'
import Machine from './Machine'
import Agent from './Agent'

class App extends Component {
  state = {
    activeNumber: 1042,
    largestNumber: 1043,
    queue: {},
    ready: {},
  }

  componentDidMount() {
    this.ref = base.syncState('queue', {
      context: this,
      state: 'queue',
    })
  }

  componentWillUnmount = () => {
    base.removeBinding(this.ref);
  };

  addToQueue = ticket => {
    const queue = { ...this.state.ticket }
    queue[ticket.start] = ticket;
    const largestNumber = parseInt(ticket.number, 10) + 1;
    this.setState({
      queue,
      largestNumber
    })
  }

  removeFromQueue = () => {
    const queue = { ...this.state.queue };
    const activeQueue = Object.keys(queue).filter(ticket => queue[ticket].active);
    if (activeQueue.length > 0) {
      const ticketId = activeQueue[0];
      queue[ticketId].active = false;
      queue[ticketId].stop = Date.now();
      queue[ticketId].waitingTime = queue[ticketId].stop - queue[ticketId].start;
      this.setState({ queue })
    }
  }

  getActiveQueue = () => {
    return Object.keys(this.state.queue).filter(ticket => this.state.queue[ticket].active);
  }

  showNextServedTicket = () => {
    const activeQueue = Object.keys(this.state.queue).filter(ticket => this.state.queue[ticket].active);
    if (activeQueue.length > 0) {
      const ticketId = activeQueue[0];
      return this.state.queue[ticketId].number
    }
    return 'empty'
  }

  getLargestNumber = () => {
    const number = this.state.queue[Object.keys(this.state.queue)[Object.keys(this.state.queue).length - 1]]
    console.log(number);;
  }



  render() {
    return (
      <div className="App">
        <header className="navigation">
          <Link to="/">Board</Link>
          <Link to="/machine">Machine</Link>
          <Link to="/agent">Agent</Link>
        </header>
        <Switch>
          <Route exact path="/">
            <Board
              activeNumber={this.state.activeNumber}
              showNextServedTicket={this.showNextServedTicket}
            />
          </Route>
          <Route exact path="/agent">
            <Agent
              queue={this.state.queue}
              largestNumber={this.state.largestNumber}
              removeFromQueue={this.removeFromQueue}
              getActiveQueue={this.getActiveQueue}
              showNextServedTicket={this.showNextServedTicket}
            />
          </Route>
          <Route exact path="/machine">
            <Machine
              queue={this.state.queue}
              largestNumber={this.state.largestNumber}
              addToQueue={this.addToQueue}
              getLargestNumber={this.getLargestNumber}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
