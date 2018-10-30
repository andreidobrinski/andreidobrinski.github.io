import React from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import Footer from '../../app/footer';
import WebDev from './web-dev';
import IosDev from './ios-dev';
import {
  Content, Context, Header, Subheader,
} from '../styled';

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
      <Subheader>
        Web Development
      </Subheader>
      <WebDev />
      <Subheader>
        iOS Development
      </Subheader>
      <IosDev />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default LifeTales;
