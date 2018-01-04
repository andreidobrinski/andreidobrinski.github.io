import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBarContainer">
        <div className="NavBar">
          <a className={this.props.workStyle} href="#">Work</a>
          <a className={this.props.playStyle} href="#">Play</a>
          <a className={this.props.selfStyle} href="#">Self</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
