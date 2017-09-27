import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="NavBarContainer">
          <div className="NavBar">
            <a className="nav-text" href="#">Work</a>
            <a className="nav-text" href="#">Play</a>
            <a className="nav-text" href="#">Self</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;