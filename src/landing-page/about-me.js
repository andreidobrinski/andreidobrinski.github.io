import React from 'react';
import {
  Wrapper, Content, Header, Body,
} from '../work/styled';
import { ExternalLink, InternalLink } from '../app/styled';

const AboutMe = React.forwardRef((props, aboutMeRef) => (
  <Wrapper style={{ backgroundColor: 'transparent', textAlign: 'left' }}>
    <Content>
      <Header ref={aboutMeRef}>
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
        In my spare time, you can find me at the gym, hanging out with my cat, or at a tech meetup in the city.
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
