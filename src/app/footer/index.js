import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tippy';
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
              onClick={() => emailButtonRef.current.blur()}
              ref={emailButtonRef}
            >
              <EmailIcon />
            </Button>
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
};

export default Footer;
