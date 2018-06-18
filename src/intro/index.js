import React from 'react';
import logo from './andreiDLogo.svg';
import { Wrapper, ADLogo, TextWrap, Text } from './styled';

const Intro = () => (
  <Wrapper>
    <ADLogo src={logo} alt="Andrei Dobrinski's logo" />
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
