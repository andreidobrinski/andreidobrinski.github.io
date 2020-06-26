import React from 'react';
import PropTypes from 'prop-types';
import AdLogo from './ad-logo';
import { ExternalLink } from '../../app/styled';
import {
  Wrapper, TextWrap, Text, AboutMeButton,
} from './styled';
import { LinkStyles } from '../../app/styled';
console.log('LinkStyles', LinkStyles);

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
        Learn more
        {' '}
        <AboutMeButton onClick={scrollToAboutMe}>
          about me
        </AboutMeButton>
        , my
        {' '}
        <ExternalLink
          eventLabel="Blog from Intro"
          to="https://andreidobrinski.com/blog"
        >
          tech writing
        </ExternalLink>
        , or check out some of my projects below.
      </Text>
    </TextWrap>
  </Wrapper>
);

Intro.propTypes = {
  scrollToAboutMe: PropTypes.func.isRequired,
};

export default Intro;
