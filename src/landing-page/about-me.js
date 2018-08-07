import React from 'react';
import { Wrapper, Content, Header, Body } from '../work/styled';
import { ExternalLink, InternalLink } from '../app/styled';

const AboutMe = () => (
  <Wrapper style={{ backgroundColor: 'transparent', textAlign: 'left' }}>
    <Content>
      <Header>
        About Me
      </Header>
      <Body>
        I&apos;m Andrei.
        I like to build websites using modern tools like
        React, Redux, Styled Components, and Gatsby.
        I do mostly front-end development while staying mindful of the UX design.
        I&apos;m always&nbsp;
        <InternalLink to="/learning">
          learning
        </InternalLink> and&nbsp;
        <ExternalLink href="https://github.com/andreidobrinski">contributing</ExternalLink>
        &nbsp;to open-source software.
      </Body>
      <Body>
        In my spare time, you can find me playing my Stratocaster,
        producing music with Logic Pro, or sampling Ontario&apos;s selection of craft beer.
        I also enjoy reading non-fiction&nbsp;
        <ExternalLink href="https://www.goodreads.com/user/show/44194464-andrei">
          books
        </ExternalLink> and I&apos;m always looking for new recommendations.
      </Body>
    </Content>
  </Wrapper>
);

export default AboutMe;
