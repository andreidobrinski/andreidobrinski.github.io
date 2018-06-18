import React from 'react';
import logo from '../andreiDLogo.svg';
import { Wrapper, ADLogo, Text } from './styled';

const Intro = () => (
  <Wrapper>
    <ADLogo src={logo} alt="Andrei Dobrinski's logo" />
    <br />
    <Text>
			Hi, I&apos;m<br />
			Andrei Dobrinski,<br />
			a UX Designer and Front-End Developer.<br />
			Currently working at LifeTales in Toronto<br />
			What would you like to know more about?<br />
			My ...<br />
    </Text>
  </Wrapper>
);

export default Intro;
