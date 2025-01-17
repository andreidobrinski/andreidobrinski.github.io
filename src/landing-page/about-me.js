import React from 'react';
import {
  Wrapper, Content, Header, Body,
} from '../work/styled';
import { ExternalLink, InternalLink } from '../app/styled';

const AboutMe = React.forwardRef((props, aboutMeRef) => (
  <Wrapper style={{ backgroundColor: 'transparent', textAlign: 'left' }} as="section">
    <Content>
      <Header ref={aboutMeRef} as="h2">
        About Me
      </Header>
      <Body>
        I&apos;m Andrei.
        I like to build websites and apps using modern tools like
        React, Svelte, Astro, and TypeScript.
        I build the front-end while staying mindful of the UX design, business objectives, and core product value.
        I&apos;m always
        {' '}
        <InternalLink to="/learning">
          learning
        </InternalLink>
        {' '}
        new technologies and
        {' '}
        <ExternalLink
          eventLabel="GitHub Profile from About Me"
          to="https://github.com/andreidobrinski"
        >
          contributing
        </ExternalLink>
        {' '}
        to open-source software.
      </Body>
      <Body>
        In my spare time,
        you can find me riding my bike,
        playing with my cat,
        or cooking up
        {' '}
        <ExternalLink
          eventLabel="Recipes Project from About Me"
          to="https://andreidobrinski.com/recipes"
        >
          recipes.
        </ExternalLink>
        {' '}
        I also enjoy reading non-fiction
        {' '}
        <ExternalLink
          eventLabel="Goodreads Profile from About Me"
          to="https://www.goodreads.com/user/show/44194464-andrei"
        >
          books
        </ExternalLink>
        {' '}
        and I&apos;m always looking for new recommendations.
      </Body>
    </Content>
  </Wrapper>
));

export default AboutMe;
