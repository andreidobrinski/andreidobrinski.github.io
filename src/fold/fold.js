import React, { Component } from 'react';
import logo from '../andreiDLogo.svg';
import '../fold/fold.css';
import IntroText from '../fold/introText.js';

class Fold extends Component {
	render() {
		return (
			<div className="fold">
            	<img src={logo} className="logo" alt="logo" />
            	<br />
            	<IntroText /> 
        	</div>
		);
	}
}

export default Fold;