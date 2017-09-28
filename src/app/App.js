import React, { Component } from 'react';
import './App.css';
import Fold from '../fold/fold.js';
import NavBar from '../navbar/navbar.js';
import Card from '../card/card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Fold />

        <NavBar />

        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    );
  }
}

export default App;
