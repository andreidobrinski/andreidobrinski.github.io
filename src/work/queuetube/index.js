import React from 'react';
import { importMDX } from 'mdx.macro';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import BackButton from '../../app/back-button';
import Footer from '../../app/footer';
import { Content } from '../styled';
import { mdxComponents } from '../../app/mdx-components';

const QueueTubeContent = importMDX.sync('./queuetube-content.mdx');

const QueueTube = () => (
  <ScrollToTop>
    <Card isHeader project="gymtodo" />
    <Content>
      <QueueTubeContent components={mdxComponents} />
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default QueueTube;