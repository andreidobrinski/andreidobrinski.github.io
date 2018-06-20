import React from 'react';
import AdLogo from './ad-logo';
import { Wrapper, TextWrap, Text } from './styled';

const Intro = () => (
  <Wrapper>
    <AdLogo />
    <TextWrap>
      <Text>
        Hi, I&apos;m Andrei Dobrinski,
      </Text>
      <Text>
        a front-end developer that loves the modern web.
      </Text>
      <Text>
        I&apos;m currently working at LifeTales in Toronto.
      </Text>
      <Text>
        Check out some of my projects.
      </Text>
    </TextWrap>
  </Wrapper>
);

export default Intro;
