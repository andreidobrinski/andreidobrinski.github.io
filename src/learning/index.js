import React from 'react';
import ScrollToTop from '../app/scroll-to-top';
import ADLogo from '../landing-page/intro/ad-logo';
import Footer from '../app/footer';
import { LearningList } from './list';
import BackButton from '../app/back-button';
import { Content, Context, Header, Body } from '../work/styled';

const Learning = () => (
  <ScrollToTop>
    <ADLogo height={200} />
    <Content>
      <Header>Learning</Header>
      <Context>
        A quick list of courses and workshops I&apos;ve taken and enjoyed
      </Context>
      <Body>In reverse chronological order:</Body>
      <Body>-</Body>
      <LearningList />
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default Learning;
