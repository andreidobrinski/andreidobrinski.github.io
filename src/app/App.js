import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './landing-page';
import Fold from '../fold/fold.js';
import NavBar from '../navbar/navbar.js';
import Card from '../card/card.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
