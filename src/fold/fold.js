import React from 'react';
import logo from '../andreiDLogo.svg';
import IntroText from './IntroText';
import { Wrapper, ADLogo } from './styled';

const Fold = () => (
	<Wrapper>
		<ADLogo src={logo} alt="Andrei Dobrinski's logo" />
		<br />
		<IntroText />
	</Wrapper>
);

export default Fold;
