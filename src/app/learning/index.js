import React from 'react';
import ScrollToTop from '../scroll-to-top';
import ADLogo from '../../intro/ad-logo';
import Footer from '../footer';
import LearningList from './list';
import { ExternalLink, InternalLink } from '../styled';
import { Wrapper, Content, Context, Header, Body } from '../../work/styled';

const Learning = () => (
  <ScrollToTop>
    <Wrapper>
      <ADLogo height={200} />
      <Content>
        <Header>Learning</Header>
        <Context>A quick list of courses I&apos;ve taken and enjoyed</Context>
        {Object.keys(LearningList).map(course => (
          <Body>
            {LearningList[course].author}
            &nbsp;-&nbsp;
            <ExternalLink href={LearningList[course].link}>
              {LearningList[course].name}
            </ExternalLink>
          </Body>
        ))}
        <Body style={{ marginTop: '2.618em' }}>
          <InternalLink to="/">
            Back
          </InternalLink>
        </Body>
      </Content>
      <Footer />
    </Wrapper>
  </ScrollToTop>
);

export default Learning;
