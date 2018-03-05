import React from 'react';
import { Link } from 'react-router-dom';
import Fold from '../fold/Fold';
import NavBar from '../navbar/Navbar';
import Card from '../card/Card';
import Footer from '../components/footer';
import badlandsLogo from '../work/BadlandsBrewing/assets/badlands-brewing-logo.svg';
import { App } from './styled';

const LandingPage = () => (
  <App>
    <Fold />
    <NavBar />
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
    <Card />
    <Card />
    <Card />
    <Footer />
  </App>
);

export default LandingPage;
