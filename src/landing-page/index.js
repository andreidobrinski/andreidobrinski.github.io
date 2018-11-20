import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './intro';
import Card from '../app/card';
import AboutMe from './about-me';
import Footer from '../app/footer';
import { App, ExternalLink } from '../app/styled';

const LandingPage = () => {
  const scrollToAboutMe = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <App>
      <Intro scrollToAboutMe={scrollToAboutMe} />
      <Link to="/lifetales">
        <Card project="lifetales" />
      </Link>
      <Link to="/albumpicker">
        <Card project="albumpicker" />
      </Link>
      <Link to="/badlands-brewing">
        <Card project="badlands" />
      </Link>
      <ExternalLink noStyle href="https://github.com/andreidobrinski/LoadingAnimations">
        <Card project="loadingAnimations" />
      </ExternalLink>
      <AboutMe />
      <Footer />
    </App>
  );
};

export default LandingPage;
