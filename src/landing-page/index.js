import React, { useLayoutEffect, createRef } from 'react';
import Intro from './intro';
import Card from '../app/card';
import AboutMe from './about-me';
import Footer from '../app/footer';
import { AboutMeEvent } from '../app/analytics/events';
import { App, ExternalLink } from '../app/styled';
import { ListWrap, ButtonLink } from '../app/card/styled';

const LandingPage = ({ history: { push }, scrollPosition, setScrollPosition }) => {
  const aboutMeRef = createRef();

  useLayoutEffect(() => {
    window.scroll(0, scrollPosition);
  }, [scrollPosition]);

  const scrollToAboutMe = () => {
    AboutMeEvent();
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <App>
      <Intro scrollToAboutMe={scrollToAboutMe} />
      <ListWrap>
        <ButtonLink onClick={() => {
          push('/lifetales');
          setScrollPosition(window.pageYOffset);
        }}>
          <Card project="lifetales" />
        </ButtonLink>
        <ButtonLink onClick={() => {
          push('/rl-inventory');
          setScrollPosition(window.pageYOffset);
        }}>
          <Card project="rlinventory" />
        </ButtonLink>
        <ButtonLink onClick={() => {
          push('/scopa-calculator');
          setScrollPosition(window.pageYOffset);
        }}>
          <Card project="scopa" />
        </ButtonLink>
        <ButtonLink onClick={() => {
          push('/gym-todo');
          setScrollPosition(window.pageYOffset);
        }}>
          <Card project="gymtodo" />
        </ButtonLink>
        <ButtonLink onClick={() => {
          push('/albumpicker');
          setScrollPosition(window.pageYOffset);
        }}>
          <Card project="albumpicker" />
        </ButtonLink>
        <ButtonLink onClick={() => {
          push('/badlands-brewing');
          setScrollPosition(window.pageYOffset);
        }}>
          <Card project="badlands" />
        </ButtonLink>
        <ExternalLink
          eventLabel="LoadingAnimations"
          to="https://github.com/andreidobrinski/LoadingAnimations"
          nostyle="true"
          style={{ margin: '16px auto' }}
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
