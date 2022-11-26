import React, { useLayoutEffect, createRef } from 'react';
import Intro from './intro';
import Card from '../app/card';
import AboutMe from './about-me';
import Footer from '../app/footer';
import { AboutMeEvent } from '../app/analytics/events';
import { App } from '../app/styled';
import { ListWrap, ButtonLink } from '../app/card/styled';
import { Body } from '../work/styled';
import { LinkButton } from '../app/back-button';

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
        <ButtonLink
          onClick={() => {
            push('/queuetube');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="queuetube project"
        >
          <Card project="queuetube" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/druid-wild-shape');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="druid wild shape project"
        >
          <Card project="druidWildShape" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/lifetales');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="lifetales project"
        >
          <Card project="lifetales" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/gym-todo-project');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="gym todo project"
        >
          <Card project="gymtodo" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/rl-inventory');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="rocket league inventory project"
        >
          <Card project="rlinventory" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/scopa-calculator');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="scopa calculator project"
        >
          <Card project="scopa" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/albumpicker');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="album picker project"
        >
          <Card project="albumpicker" />
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            push('/badlands-brewing');
            setScrollPosition(window.pageYOffset);
          }}
          aria-label="badlands brewing project"
        >
          <Card project="badlands" />
        </ButtonLink>
      </ListWrap>
      <LinkButton
        onClick={() => {
          push('/archived-projects');
          setScrollPosition(window.pageYOffset);
        }}
        aria-label="archived projects"
      >
        <Body style={{ margin: 0 }}>
          Archived Projects
        </Body>
      </LinkButton>
      <AboutMe ref={aboutMeRef} />
      <Footer />
    </App>
  );
};

export default LandingPage;
