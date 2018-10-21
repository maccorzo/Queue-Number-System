import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import base from '../base';

import '../static/css/style.css';
import Board from './Board'
import Machine from './Machine'
import Agent from './Agent'

class App extends Component {
  state = {
    queue: {
      tickets: {},
      activeNumber: 0,
      largestNumber: 0,
    },
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

  initializeSystem = () => {
    const queue = { ...this.state.queue }
    const firstTicket = {
      active: true,
      number: 1001,
      start: Date.now(),
      stop: 0,
      waitingTime: 0,
    }
    queue.tickets = {}
    queue.tickets[firstTicket.start] = firstTicket;
    queue.activeNumber = 0;
    queue.largestNumber = 1001;
    this.setState({
      queue,
    })
  }
  addToQueue = ticket => {

    const queue = { ...this.state.queue }
    queue.tickets[ticket.start] = ticket;
    queue["largestNumber"] = parseInt(ticket.number, 10) + 1;
    this.setState({
      queue,
    })
  }

  removeFromQueue = () => {
    const queue = { ...this.state.queue };
    const activeQueue = Object.keys(queue.tickets).filter(ticket => queue.tickets[ticket].active);
    if (activeQueue.length > 0) {
      const ticketId = activeQueue[0];
      queue.tickets[ticketId].active = false;
      queue.tickets[ticketId].stop = Date.now();
      queue.tickets[ticketId].waitingTime = queue.tickets[ticketId].stop - queue.tickets[ticketId].start;
      queue['activeNumber'] = queue.tickets[ticketId].number;
      this.setState({ queue })
    }
  }

  getActiveQueue = () => {
    return Object.keys(this.state.queue.tickets).filter(ticket => this.state.queue.tickets[ticket].active);
  }

  showNextServedTicket = () => {
    const activeQueue = this.getActiveQueue();
    if (activeQueue.length > 0) {
      const ticketId = activeQueue[0];
      return this.state.queue.tickets[ticketId].number
    }
    return '---';
  }

  render() {
    return (
      <div className="App">
        <header className="navigation">
          <NavLink to="/board" activeClassName="link--active">Board</NavLink>
          <NavLink to="/machine" activeClassName="link--active">Machine</NavLink>
          <NavLink to="/agent" activeClassName="link--active">Agent</NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <button onClick={this.initializeSystem}>initialize</button>
          </Route>
          <Route exact path="/board">
            <Board
              activeNumber={this.state.queue.activeNumber}
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
              getActiveQueue={this.getActiveQueue}
              getLargestNumber={this.getLargestNumber}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
