import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../static/css/style.css';
import Board from './Board'
import Machine from './Machine'
import Agent from './Agent'

class App extends Component {
  state = {
    activeNumber: 1042,
    largestNumber: 1043,
    queue: {},
  }

  addToQueue = number => {
    const queue = { ...this.state.queue }
    queue[number.start] = number;
    const largestNumber = parseInt(number.number, 10) + 1;
    this.setState({
      queue,
      largestNumber
    })
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
            <Board activeNumber={this.state.activeNumber} />
          </Route>
          <Route exact path="/agent">
            <Agent
              queue={this.state.queue}
              largestNumber={this.state.largestNumber}
              removeFromQueue={this.removeFromQueue}
            />
          </Route>
          <Route exact path="/machine">
            <Machine
              queue={this.state.queue}
              largestNumber={this.state.largestNumber}
              addToQueue={this.addToQueue}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
