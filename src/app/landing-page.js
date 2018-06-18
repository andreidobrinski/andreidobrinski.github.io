import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../intro';
// import NavBar from './navbar/';
import Card from './card';
import Footer from './footer';
import { App } from './styled';

const LandingPage = () => (
  <App>
    <Intro />
    <Link to="/work/badlands-brewing">
      <Card project="badlands" />
    </Link>
    <Link to="/work/album-picker">
      <Card project="albumpicker" />
    </Link>
    <Footer />
  </App>
);

export default LandingPage;
