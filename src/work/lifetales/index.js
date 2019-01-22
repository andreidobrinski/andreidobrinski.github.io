/* eslint-disable max-len */
import React, { Component } from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import Footer from '../../app/footer';
import BackButton from '../../app/back-button';
import WebDev from './web-dev';
import IosDev from './ios-dev';
import UXDesign from './ux-design';
import { LTWebEvent, LTIosEvent, LTDesignEvent } from '../../app/analytics/events';
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
            I took on several roles while working at a startup called LifeTales, based out of the Ryerson DMZ tech incubator.
          </Context>
          <Context>
            LifeTales is an iOS and web app that helps families easily create and privately share stories worth remembering. Check out the
            {' '}
            <ExternalLink
              eventLabel="LifeTales Website from LifeTales"
              to="https://lifetales.com/"
            >
              website
            </ExternalLink>
            {' '}
            and the
            {' '}
            <ExternalLink
              eventLabel="LifeTales App from LifeTales"
              to="https://member.lifetales.com/account"
            >
              app
            </ExternalLink>
            {' '}
            that I helped build.
          </Context>
          <Context>
            I started with job in marketing, which led to opportunities in UX design, iOS development, and then ultimately to a career in web development.
          </Context>
          <SectionToggleButton
            onClick={() => {
              toggle('webDevToggled');
              LTWebEvent();
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
              LTIosEvent();
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
              LTDesignEvent();
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
