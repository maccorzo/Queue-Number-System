import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import base from '../base';

import '../static/css/style.css';
import Board from './Board'
import Machine from './Machine'
import Agent from './Agent'

class App extends Component {
  state = {
    queue: {},
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
    const queue = { ...this.state.ticket }
    const firstTicket = {
      active: true,
      number: 1001,
      start: Date.now(),
      stop: 0,
      waitingTime: 0,
    }
    queue[firstTicket.start] = firstTicket;
    this.setState({
      queue,
    })
  }
  addToQueue = ticket => {

    const queue = { ...this.state.ticket }
    queue[ticket.start] = ticket;
    queue["largestNumber"] = parseInt(ticket.number, 10) + 1;
    this.setState({
      queue,
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
      queue['activeNumber'] = queue[ticketId].number;
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
          <NavLink to="/board" activeClassName="link--active">Board</NavLink>
          <NavLink to="/machine" activeClassName="link--active">Machine</NavLink>
          <NavLink to="/agent" activeClassName="link--active">Agent</NavLink>
        </header>
        <Switch>
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
