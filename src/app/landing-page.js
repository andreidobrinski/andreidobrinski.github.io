import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../intro';
// import NavBar from './navbar/';
import Card from './card/';
import Footer from './footer';
import badlandsLogo from '../work/badlands-brewing/assets/badlands-brewing-logo.svg';
import { App } from './styled';

const LandingPage = () => (
  <App>
    <Intro />
    <Link to="/work/badlands-brewing">
      <Card
        product="Badlands Brewing"
        skill="Logo Design"
        image={badlandsLogo}
      />
    </Link>
    <Link to="/work/album-picker">
      <Card
        product="Album Picker"
        skill="Dev/Design"
      />
    </Link>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Footer />
  </App>
);

export default LandingPage;
