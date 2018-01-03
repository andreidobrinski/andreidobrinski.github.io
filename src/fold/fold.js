import React from 'react';
import logo from '../andreiDLogo.svg';
import '../fold/fold.css';
import IntroText from '../fold/IntroText';

const Fold = () => (
	<div className="fold">
		<img src={logo} className="logo" alt="logo" />
		<br />
		<IntroText />
	</div>
);

export default Fold;
