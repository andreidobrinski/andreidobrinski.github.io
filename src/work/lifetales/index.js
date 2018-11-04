import React, { Component } from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import Footer from '../../app/footer';
import BackButton from '../../app/back-button';
import WebDev from './web-dev';
import IosDev from './ios-dev';
import UXDesign from './ux-design';
import { ExternalLink } from '../../app/styled';
import {
  Content, Context, Header, Subheader, SectionToggleButton,
} from '../styled';

class LifeTales extends Component {
  constructor(props) {
    super(props);
    this.webDevRef = React.createRef();
    this.iosDevRef = React.createRef();
    this.uxRef = React.createRef();
  }

  state = {
    webDevToggled: true,
    iosDevToggled: false,
    uxDesignToggled: false,
  }

  render() {
    const { webDevToggled, iosDevToggled, uxDesignToggled } = this.state;

    const toggle = (state) => {
      this.setState(prevState => ({
        [state]: !prevState[state],
      }));
    };

    const blur = (ref) => {
      ref.current.blur();
    };

    return (
      <ScrollToTop>
        <Card isHeader project="lifetales" />
        <Content>
          <Header>
            LifeTales
          </Header>
          <Context>
            A journey through marketing, design and iOS development, leading into web development,
            starting May 2016 until the present day. Check out the website
            {' '}
            <ExternalLink href="https://lifetales.com/">
              here.
            </ExternalLink>
          </Context>
          <SectionToggleButton
            onClick={() => {
              toggle('webDevToggled');
              blur(this.webDevRef);
            }}
            ref={this.webDevRef}
          >
            <Subheader>
              Web Development
            </Subheader>
          </SectionToggleButton>
          {webDevToggled && <WebDev />}
          <SectionToggleButton
            onClick={() => {
              toggle('iosDevToggled');
              blur(this.iosDevRef);
            }}
            ref={this.iosDevRef}
          >
            <Subheader>
              iOS Development
            </Subheader>
          </SectionToggleButton>
          {iosDevToggled && <IosDev />}
          <SectionToggleButton
            onClick={() => {
              toggle('uxDesignToggled');
              blur(this.uxRef);
            }}
            ref={this.uxRef}
          >
            <Subheader>
              User Experience Design
            </Subheader>
          </SectionToggleButton>
          {uxDesignToggled && <UXDesign />}
          <BackButton />
        </Content>
        <Footer />
      </ScrollToTop>
    );
  }
}

export default LifeTales;
