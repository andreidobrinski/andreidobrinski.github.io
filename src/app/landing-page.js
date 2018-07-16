import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../intro';
import Card from './card';
import AboutMe from './about-me';
import Footer from './footer';
import { App, ExternalLink } from './styled';

const LandingPage = () => (
  <App>
    <Intro />
    <Link to="/work/album-picker">
      <Card project="albumpicker" />
    </Link>
    <Link to="/work/badlands-brewing">
      <Card project="badlands" />
    </Link>
    <ExternalLink noStyle href="https://github.com/andreidobrinski/LoadingAnimations">
      <Card project="loadingAnimations" />
    </ExternalLink>
    <AboutMe />
    <Footer />
  </App>
);

export default LandingPage;
