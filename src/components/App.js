import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>link link link</header>
        <Switch>
          <Route exact path="/">
            <div>Route /</div>
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
