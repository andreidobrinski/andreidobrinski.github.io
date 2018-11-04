import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledIcons } from './styled';
import EmailIcon from './assets/email-icon';

const Button = styled.button.attrs({
  type: 'button',
})`
  ${StyledIcons};
  border: none;
  cursor: pointer;
  grid-column: 2;
  padding: 0;
  margin-top: 10px;
  &:active {
    outline: none;
  }
`;

class EmailButton extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  render() {
    return (
      <Button
        onClick={() => this.buttonRef.current.blur()}
        ref={this.buttonRef}
      >
        <EmailIcon />
      </Button>
    );
  }
}

export default EmailButton;
