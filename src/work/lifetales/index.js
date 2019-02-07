/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
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

const LifeTales = () => {
  const webDevRef = useRef();
  const iosDevRef = useRef();
  const uxRef = useRef();

  const [webToggled, toggleWeb] = useState(true);
  const [iosToggled, toggleIos] = useState(false);
  const [uxToggled, toggleUx] = useState(false);

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
            toggleWeb(!webToggled);
            LTWebEvent();
            blur(webDevRef);
          }}
          ref={webDevRef}
        >
          <Subheader>
            Web Development
          </Subheader>
        </SectionToggleButton>
        {webToggled && <WebDev />}
        <SectionToggleButton
          onClick={() => {
            toggleIos(!iosToggled);
            LTIosEvent();
            blur(iosDevRef);
          }}
          ref={iosDevRef}
        >
          <Subheader>
            iOS Development
          </Subheader>
        </SectionToggleButton>
        {iosToggled && <IosDev />}
        <SectionToggleButton
          onClick={() => {
            toggleUx(!uxToggled);
            LTDesignEvent();
            blur(uxRef);
          }}
          ref={uxRef}
        >
          <Subheader>
            User Experience Design
          </Subheader>
        </SectionToggleButton>
        {uxToggled && <UXDesign />}
        <BackButton />
      </Content>
      <Footer />
    </ScrollToTop>
  );
};

export default LifeTales;
