import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import '../static/css/style.css';
import Board from './Board'
import Machine from './Machine'

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
        <header className="nav">link link link</header>
        <Switch>
          <Route exact path="/">
            <Board activeNumber={this.state.activeNumber} />
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
