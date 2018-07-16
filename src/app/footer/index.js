import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
import EmailIcon from './assets/email-icon';
import GithubLogo from './assets/github-logo';
import LinkedInLogo from './assets/linkedin-logo';
import { Wrap, EmailButton, SocialLink } from './styled';

const Footer = () => (
  <Wrap>
    <Tooltip
      title="Email copied to clipboard"
      trigger="click"
      animation="scale"
      style={{ gridRow: '2 / 3', gridColumn: '2' }}
    >
      <CopyToClipboard text="dobrinski.andrei@gmail.com">
        <EmailButton>
          <EmailIcon />
        </EmailButton>
      </CopyToClipboard>
    </Tooltip>
    <SocialLink center href="https://github.com/andreidobrinski">
      <GithubLogo />
    </SocialLink>
    <SocialLink href="https://www.linkedin.com/in/andrei-dobrinski-13a137122/">
      <LinkedInLogo />
    </SocialLink>
  </Wrap>
);

export default Footer;
