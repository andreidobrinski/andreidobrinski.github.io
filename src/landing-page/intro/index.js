import React from 'react';
import PropTypes from 'prop-types';
import AdLogo from './ad-logo';
import { ExternalLink } from '../../app/styled';
import {
  Wrapper, TextWrap, Text, AboutMeButton,
} from './styled';

const Intro = ({ scrollToAboutMe }) => (
  <Wrapper>
    <AdLogo />
    <TextWrap>
      <Text style={{ fontWeight: 'bold' }}>
        Hi, I&apos;m Andrei Dobrinski,
      </Text>
      <Text>
        a front-end developer that loves the modern web.
      </Text>
      <Text>
        I&apos;m currently working at
        {' '}
        <ExternalLink
          eventLabel="LifeTales from Intro Page"
          to="https://www.lifetales.com"
        >
          LifeTales
        </ExternalLink>
        {' '}
        in Toronto.
      </Text>
      <Text>
        Learn a bit more
        {' '}
        <AboutMeButton onClick={scrollToAboutMe}>
          about me
        </AboutMeButton>
        {' '}
        or check out some of my projects below.
      </Text>
    </TextWrap>
  </Wrapper>
);

Intro.propTypes = {
  scrollToAboutMe: PropTypes.func.isRequired,
};

export default Intro;
