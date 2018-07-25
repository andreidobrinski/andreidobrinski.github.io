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
  box-shadow: inset 0 -6px 0 0 ${props => props.theme.colours.link};
  transition: box-shadow 0.3s ease-in;

  &:hover {
    box-shadow: inset 0 -30px 0 0 ${props => props.theme.colours.link};
  }
`;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${LinkStyles};
  ${props => props.noStyle && `
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
    padding: 0;
  `};
`;

export const InternalLink = styled(Link)`
  ${LinkStyles};
`;
