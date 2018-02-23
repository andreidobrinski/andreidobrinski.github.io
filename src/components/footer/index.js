import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Email from './assets/email-logo.svg';
import Github from './assets/github-logo.svg';
import LinkedIn from './assets/linkedin-logo.svg';
import { Wrap, EmailButton, SocialLink, CopiedConfirm } from './styled';

class Footer extends Component {
  state = { copiedEmail: false };

  render() {
    if (this.state.copiedEmail === true) {
      setTimeout(() => this.setState({ copiedEmail: false }), 3000);
    }

    return (
      <Wrap>
        {this.state.copiedEmail && <CopiedConfirm>Copied Email to Clipboard</CopiedConfirm>}
        <CopyToClipboard
          text="dobrinski.andrei@gmail.com"
          onCopy={() => this.setState({ copiedEmail: true })}
        >
          <EmailButton icon={Email} />
        </CopyToClipboard>
        <SocialLink
          icon={Github}
          href="https://github.com/andreidobrinski"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialLink
          icon={LinkedIn}
          href="https://www.linkedin.com/in/andrei-dobrinski-13a137122/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Wrap>
    );
  }
}

export default Footer;
