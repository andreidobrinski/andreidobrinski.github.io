import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Fold from '../fold/Fold';
import NavBar from '../navbar/Navbar';
import Card from '../card/Card';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <Fold />
        <NavBar workStyle="nav-text" playStyle="nav-text-subtle" selfStyle="nav-text-subtle"/>
        <Link to="/work/BadlandsBrewing">
          <Card
            product="Badlands Brewing"
            skill="Logo Design"
          />
        </Link>
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
