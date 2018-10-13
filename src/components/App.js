import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import '../static/css/style.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>link link link</header>
        <Switch>
          <Route exact path="/">
            <Board />
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
