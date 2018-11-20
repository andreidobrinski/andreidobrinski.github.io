import React from 'react';
import {
  Wrapper, Content, Header, Body,
} from '../work/styled';
import { ExternalLink, InternalLink } from '../app/styled';

const AboutMe = () => (
  <Wrapper style={{ backgroundColor: 'transparent', textAlign: 'left' }}>
    <Content>
      <Header>
        About Me
      </Header>
      <Body>
        I&apos;m Andrei.
        I like to build websites and apps using modern tools like
        React, Gatsby, Styled Components, and GraphQL.
        I do mostly front-end development while staying mindful of the UX design.
        I&apos;m always
        {' '}
        <InternalLink to="/learning">
          learning
        </InternalLink>
        {' '}
        and
        {' '}
        <ExternalLink href="https://github.com/andreidobrinski">
          contributing
        </ExternalLink>
        {' '}
        to open-source software.
      </Body>
      <Body>
        In my spare time, you can find me playing my Stratocaster,
        producing music with Logic Pro, or sampling Ontario&apos;s selection of craft beer.
        I also enjoy reading non-fiction
        {' '}
        <ExternalLink href="https://www.goodreads.com/user/show/44194464-andrei">
          books
        </ExternalLink>
        {' '}
        and I&apos;m always looking for new recommendations.
      </Body>
    </Content>
  </Wrapper>
);

export default AboutMe;
