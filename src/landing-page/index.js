import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './intro';
import Card from '../app/card';
import AboutMe from './about-me';
import Footer from '../app/footer';
import { AboutMeEvent } from '../app/analytics/events';
import { App, ExternalLink } from '../app/styled';
import { ListWrap } from '../app/card/styled';

const LandingPage = () => {
  const aboutMeRef = React.createRef();

  const scrollToAboutMe = () => {
    AboutMeEvent();
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <App>
      <Intro scrollToAboutMe={scrollToAboutMe} />
      <ListWrap>
        <Link to="/lifetales">
          <Card project="lifetales" />
        </Link>
        <Link to="/rl-inventory">
          <Card project="rlinventory" />
        </Link>
        <Link to="/albumpicker">
          <Card project="albumpicker" />
        </Link>
        <Link to="/badlands-brewing">
          <Card project="badlands" />
        </Link>
        <ExternalLink
          eventLabel="LoadingAnimations"
          to="https://github.com/andreidobrinski/LoadingAnimations"
          noStyle
        >
          <Card project="loadingAnimations" />
        </ExternalLink>
      </ListWrap>
      <AboutMe ref={aboutMeRef} />
      <Footer />
    </App>
  );
};

export default LandingPage;
