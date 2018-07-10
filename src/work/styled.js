import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colours.background};
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0px 12px;
`;

export const Context = styled.h2`
  font-size: 1.618rem;
  font-weight: 100;
  margin-bottom: 2.618em;
  color: ${props => props.theme.colours.text};
`;

export const Header = styled.h3`
  font-size: 2.619em;
  color: ${props => props.theme.colours.text};
`;

export const Body = styled.p`
  line-height: 1.618;
  font-size: 1.618em;
  color: ${props => props.theme.colours.text};
`;
