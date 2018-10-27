import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Body } from '../work/styled';
import { LinkStyles } from './styled';

const Button = styled.button.attrs({
  type: 'button',
})`
  all: unset;
  ${LinkStyles};
`;

const BackButton = ({ history }) => (
  <Body style={{ marginTop: '2.618em' }}>
    <Button
      onClick={() => history.goBack()}
    >
      &larr; Back
    </Button>
  </Body>
);

BackButton.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(BackButton);
