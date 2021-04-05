import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Body } from '../work/styled';
import { LinkStyles } from './styled';

export const LinkButton = styled.button.attrs({
  type: 'button',
  role: 'link'
})`
  ${LinkStyles};
  margin-top: ${props => props.theme.ratio.two}em;
  border: none;
  background: none;
  &:active {
    outline: none;
  }
`;

const BackButton = ({ history: { push } }) => {
  const buttonRef = useRef();

  return (
    <LinkButton
      onClick={() => {
        buttonRef.current.blur();
        push('/');
      }}
      ref={buttonRef}
      aria-label="back to home"
    >
      <Body style={{ margin: '0' }}>
        &larr; Back
      </Body>
    </LinkButton>
  );
};

BackButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BackButton);
