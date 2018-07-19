import React from 'react';
import ScrollToTop from '../scroll-to-top';
import ADLogo from '../../intro/ad-logo';
import Footer from '../footer';
import LearningList from './list';
import { ExternalLink, InternalLink } from '../styled';
import { Content, Context, Header, Body } from '../../work/styled';

const Learning = () => (
  <ScrollToTop>
    <ADLogo height={200} />
    <Content>
      <Header>Learning</Header>
      <Context>A quick list of courses and workshops I&apos;ve taken and enjoyed</Context>
      <Body>In reverse chronological order:</Body>
      <Body>-</Body>
      {Object.keys(LearningList).slice().reverse().map(item => (
        <Body>
          {LearningList[item].author}
          &nbsp;-&nbsp;
          {LearningList[item].type}
          :&nbsp;
          <ExternalLink href={LearningList[item].link}>
            {LearningList[item].name}
          </ExternalLink>
          {LearningList[item].repo && (
            <span>
              &nbsp;/&nbsp;
              <ExternalLink href={LearningList[item].repo}>
                Repo
              </ExternalLink>
            </span>
          )}
        </Body>
      ))}
      <Body style={{ marginTop: '2.618em' }}>
        <InternalLink to="/">
          Back
        </InternalLink>
      </Body>
    </Content>
    <Footer />
  </ScrollToTop>
);

export default Learning;
