import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import '../static/css/style.css';
import Board from './Board'

class App extends Component {
  state = {
    activeNumber: 1042,
    largestNumber: 1001,
    queue: [],
  }

  render() {
    return (
      <div className="App">
        <header className="nav">link link link</header>
        <Switch>
          <Route exact path="/">
            <Board activeNumber={this.state.activeNumber} />
          </Route>
          <Route exact path="/about">
            <div>Route /about</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
