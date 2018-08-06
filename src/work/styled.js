import styled, { css } from 'styled-components';

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
  font-size: ${props => props.theme.ratio.three}em;
  color: ${props => props.theme.colours.text};
`;

export const Context = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-size: ${props => props.theme.ratio.one}rem;
  font-weight: 400;
  margin-bottom: ${props => props.theme.ratio.two}em;
  color: ${props => props.theme.colours.text};
`;

export const Subheader = styled.h3`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 700;
  font-size: ${props => props.theme.ratio.two}em;
  color: ${props => props.theme.colours.text};
`;

const BodyTextStyles = css`
  font-family: ${props => props.theme.fonts.body};
  line-height: ${props => props.theme.ratio.one};
  font-size: ${props => props.theme.ratio.one}em;
  color: ${props => props.theme.colours.text};
`;

export const Body = styled.p`
  ${BodyTextStyles};
`;

export const ListItem = styled.li`
  ${BodyTextStyles};
`;
