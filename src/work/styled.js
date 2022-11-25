import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
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
  font-size: ${props => props.theme.ratio.three}rem;
  color: ${props => props.theme.colours.text};
`;

export const Context = styled.p`
  font-family: ${props => props.theme.fonts.header};
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: ${props => props.theme.ratio.two}rem;
  color: ${props => props.theme.colours.text};
`;

export const Subheader = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 700;
  font-size: ${props => props.theme.ratio.two}rem;
  color: ${props => props.theme.colours.text};
  margin-bottom: 4px;
`;

export const Header3 = styled.h3`
  font-family: ${props => props.theme.fonts.header};
  font-weight: 500;
  font-size: ${props => props.theme.ratio.two}em;
  color: ${props => props.theme.colours.text};
  margin-bottom: 4px;
`;

export const BodyTextStyles = css`
  font-family: ${props => props.theme.fonts.body};
  line-height: ${props => props.theme.ratio.one};
  font-size: ${props => props.theme.ratio.one}rem;
  color: ${props => props.theme.colours.text};
`;

export const Body = styled.p`
  ${BodyTextStyles};
`;

export const ListItem = styled.li`
  ${BodyTextStyles};
  p {
    margin: 0;
  }
`;

export const StyledPre = styled.pre`
  font-size: 1.4rem;
  background: rgba(0,0,0,0.1);
  padding: 16px;
  border-radius: 8px;
  code {
    background: transparent;
  }
`;

