import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="NavBarContainer">
          <div className="NavBar">
            <a href="#">Work</a>
            <a href="#">Play</a>
            <a href="#">Self</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;