import React from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import Footer from '../../app/footer';
import WebDev from './web-dev';
import { Content, Context, Header } from '../styled';

const LifeTales = () => (
  <ScrollToTop>
    <Card isHeader project="lifetales" />
    <Content>
      <Header>
        LifeTales
      </Header>
      <Context>
        A journey through marketing, design and iOS development, leading into web development,
        starting May 2016 until the present day.
      </Context>
      <WebDev />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default LifeTales;
