import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Body } from '../work/styled';
import { LinkStyles } from './styled';

const Button = styled.button.attrs({
  type: 'button',
})`
  ${LinkStyles};
  margin-top: ${props => props.theme.ratio.two}em;
  border: none;
  background: none;
`;

const BackButton = ({ history }) => (
  <Button
    onClick={() => history.goBack()}
  >
    <Body style={{ margin: '0' }}>
      &larr; Back
    </Body>
  </Button>
);

BackButton.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(BackButton);
