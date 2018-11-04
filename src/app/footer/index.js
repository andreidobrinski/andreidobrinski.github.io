import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
import EmailButton from './email-button';
import GithubLogo from './assets/github-logo';
import LinkedInLogo from './assets/linkedin-logo';
import {
  Wrap, CtaWrap, SocialLink, Message,
} from './styled';

const Footer = () => (
  <Wrap>
    <Message>
      Get in touch
    </Message>
    <CtaWrap>
      <Tooltip
        title="Email copied to clipboard"
        trigger="click"
        animation="scale"
        style={{ gridColumn: '2' }}
      >
        <CopyToClipboard text="dobrinski.andrei@gmail.com">
          <EmailButton />
        </CopyToClipboard>
      </Tooltip>
      <SocialLink center href="https://github.com/andreidobrinski">
        <GithubLogo />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/andrei-dobrinski-13a137122/">
        <LinkedInLogo />
      </SocialLink>
    </CtaWrap>
  </Wrap>
);

export default Footer;
