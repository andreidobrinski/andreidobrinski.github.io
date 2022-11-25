import React from 'react';
import { importMDX } from 'mdx.macro';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import BackButton from '../../app/back-button';
import Footer from '../../app/footer';
import { StyledLink } from '../../app/styled';
import {
  Content, StyledPre, Header, Subheader, Body, ListItem, Header3,
} from '../styled';

const QueueTubeContent = importMDX.sync('./queuetube-content.mdx');

const components = {
  p: Body,
  h1: Header,
  h2: Subheader,
  h3: Header3,
  li: ListItem,
  pre: StyledPre,
  a: StyledLink,
}

const QueueTube = () => (
  <ScrollToTop>
    <Card isHeader project="gymtodo" />
    <Content>
      <QueueTubeContent components={components} />
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default QueueTube;