import React, { Component } from 'react';
import './fold.css';

class IntroText extends Component {
	render() {
		return (
			<p className="intro-text">
                Hi, I'm<br />
                Andrei Dobrinski,<br />
                a UX Designer with a passion for motion design.<br />
                Currently working at LifeTales in Toronto<br />
                What would you like to know more about?<br />
                My ...<br />
            </p> 
		);
	}
}

export default IntroText;