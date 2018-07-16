import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const App = styled.div`
  text-align: center;
  width: 100%;
  background-color: ${props => props.theme.colours.background};
`;

const LinkStyles = css`
  color: ${props => props.theme.colours.text};
  text-decoration: none;
  padding: 0 2px;
  box-shadow: inset 0 -6px 0 0 ${props => props.theme.colours.main};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: inset 0 -24px 0 0 ${props => props.theme.colours.main};
  }
`;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${LinkStyles};
`;

export const InternalLink = styled(Link)`
  ${LinkStyles};
`;
