import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import BadlandsBrewing from '../work/BadlandsBrewing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/work/BadlandsBrewing" component={BadlandsBrewing} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
