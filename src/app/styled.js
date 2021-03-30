import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { BodyTextStyles } from '../work/styled';

export const App = styled.main`
  text-align: center;
  width: 100%;
  background-color: ${props => props.theme.colours.background};
`;

export const LinkStyles = css`
  color: ${props => props.theme.colours.text};
  text-decoration: none;
  padding: 0 1px;
  box-shadow: inset 0 -6px 0 0 ${props => props.theme.colours.link};
  transition: box-shadow 0.3s ease-in;

  &:hover {
    box-shadow: inset 0 -40px 0 0 ${props => props.theme.colours.link};
  }
`;

export const ExternalLink = styled(ReactGA.OutboundLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${LinkStyles};
  ${props => props.nostyle === 'true' && `
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
    padding: 0;
  `};
`;

export const InternalLink = styled(Link)`
  ${LinkStyles};
  /* ${BodyTextStyles}; */
`;
