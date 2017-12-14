import React from 'react';
import logo from '../andreiDLogo.svg';
import '../fold/fold.css';
import IntroText from '../fold/intro-text.js';

const Fold = () => {
	return (
		<div className="fold">
			<img src={logo} className="logo" alt="logo" />
			<br />
			<IntroText />
		</div>
	);
};

export default Fold;
