import React, { Component } from 'react';
import logo from './andreiDLogo.svg';
import './App.css';
import NavBar from './navbar.js';
import Card from './card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="fold">

            <img src={logo} alt="logo" />

            <br />

            <p className="intro-text">
                Hi, I'm<br />
                Andrei Dobrinski<br />
                a UX Designer with a passion for motion design.<br />
                Currently working at LifeTales in Toronto<br />
                What would you like to know more about? My...<br />
            </p>

            <NavBar />

        </div>

        <Card />

      </div>
    );
  }
}

export default App;
