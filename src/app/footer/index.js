import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
import { EmailEvent } from '../analytics/events';
import GithubLogo from './assets/github-logo';
import LinkedInLogo from './assets/linkedin-logo';
import {
  Wrap, CtaWrap, SocialLink, Message, Button,
} from './styled';
import EmailIcon from './assets/email-icon';

const Footer = () => {
  const emailButtonRef = React.createRef();

  return (
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
            <Button
              onClick={() => {
                EmailEvent();
                emailButtonRef.current.blur();
              }}
              ref={emailButtonRef}
            >
              <EmailIcon />
            </Button>
          </CopyToClipboard>
        </Tooltip>
        <SocialLink
          eventLabel="GitHub Profile from Footer"
          to="https://github.com/andreidobrinski"
          center="true"
          aria-label="Andrei Dobrinski's GitHub"
        >
          <GithubLogo />
        </SocialLink>
        <SocialLink
          eventLabel="LinkedIn Profile from Footer"
          to="https://www.linkedin.com/in/andrei-dobrinski-13a137122/"
          aria-label="Andrei Dobrinski's LinkedIn"
        >
          <LinkedInLogo />
        </SocialLink>
      </CtaWrap>
    </Wrap>
  );
};

export default Footer;
