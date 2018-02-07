import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Fold from '../fold/Fold';
import NavBar from '../navbar/Navbar';
import Card from '../card/Card';
import badlandsLogo from '../work/BadlandsBrewing/assets/badlands-brewing-logo.svg';

const LandingPage = () => (
  <div className="App">
    <Fold />
    <NavBar workStyle="nav-text" playStyle="nav-text-subtle" selfStyle="nav-text-subtle" />
    <Link to="/work/BadlandsBrewing">
      <Card
        product="Badlands Brewing"
        skill="Logo Design"
        image={badlandsLogo}
      />
    </Link>
    <Card />
    <Card />
    <Card />
    <NavBar workStyle="nav-text-subtle" playStyle="nav-text" selfStyle="nav-text-subtle" />
    <Card />
    <Card />
    <Card />
  </div>
);

export default LandingPage;
