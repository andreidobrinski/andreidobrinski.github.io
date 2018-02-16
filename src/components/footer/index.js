import React from 'react';
import Email from './assets/email-logo.svg';
import Github from './assets/github-logo.svg';
import LinkedIn from './assets/linkedin-logo.svg';
import { Wrap, IconWrap } from './styled';

const Footer = () => (
  <Wrap>
    <IconWrap icon={Email} />
    <IconWrap
      icon={Github}
      href="https://github.com/andreidobrinski"
      target="_blank"
      rel="noopener noreferrer"
    />
    <IconWrap
      icon={LinkedIn}
      href="https://www.linkedin.com/in/andrei-dobrinski-13a137122/"
      target="_blank"
      rel="noopener noreferrer"
    />
  </Wrap>
);

export default Footer;
