import styled from 'styled-components';

export const App = styled.div`
  text-align: center;
  width: 100%;
  display: inline-block;
  background-color: ${props => props.theme.colours.background};
`;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: ${props => props.theme.colours.text};
  text-decoration: none;
  padding: 0 2px;
  box-shadow: inset 0 -6px 0 0 ${props => props.theme.colours.main};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: inset 0 -24px 0 0 ${props => props.theme.colours.main};
  }
`;
