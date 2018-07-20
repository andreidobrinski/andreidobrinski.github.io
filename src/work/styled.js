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

export const Header = styled.h1`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 700;
  font-size: 4.236em;
  color: ${props => props.theme.colours.text};
`;

export const Context = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.618rem;
  font-weight: 400;
  margin-bottom: 2.618em;
  color: ${props => props.theme.colours.text};
`;

export const Subheader = styled.h3`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 700;
  font-size: 2.619em;
  color: ${props => props.theme.colours.text};
`;

export const Body = styled.p`
  font-family: ${props => props.theme.fonts.body};
  line-height: 1.618;
  font-size: 1.618em;
  color: ${props => props.theme.colours.text};
`;
