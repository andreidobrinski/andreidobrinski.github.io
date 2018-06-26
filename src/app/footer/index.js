import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
import Email from './assets/email-logo.svg';
import Github from './assets/github-logo.svg';
import LinkedIn from './assets/linkedin-logo.svg';
import { Wrap, EmailButton, SocialLink } from './styled';

const Footer = () => (
  <Wrap>
    <Tooltip
      title="Email copied to clipboard"
      trigger="click"
      animation="scale"
      style={{ gridRow: '2 / 3', gridColumn: '2' }}
    >
      <CopyToClipboard
        text="dobrinski.andrei@gmail.com"
      >
        <EmailButton icon={Email} />
      </CopyToClipboard>
    </Tooltip>
    <SocialLink
      icon={Github}
      href="https://github.com/andreidobrinski"
    />
    <SocialLink
      center
      icon={LinkedIn}
      href="https://www.linkedin.com/in/andrei-dobrinski-13a137122/"
    />
  </Wrap>
);

export default Footer;
