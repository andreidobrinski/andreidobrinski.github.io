import React, { Component } from 'react';
import './App.css';
import Fold from '../fold/fold.js';
import NavBar from '../navbar/navbar.js';
import Card from '../card/card.js';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <Fold />
        <NavBar workStyle="nav-text" playStyle="nav-text-subtle" selfStyle="nav-text-subtle"/>
        <Card />
        <Card />
        <Card />
        <Card />
        <NavBar workStyle="nav-text-subtle" playStyle="nav-text" selfStyle="nav-text-subtle"/>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default LandingPage;
