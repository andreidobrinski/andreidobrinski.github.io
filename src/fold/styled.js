import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80vh;
  width: 80%;
  display: inline-block;
`;

export const Intro = styled.p`
  color: ${props => props.theme.colours.text};
  text-align: left;
  display: inline-block;
  font-size: 2em;
  line-height: 1.618em;
`;

export const ADLogo = styled.img`
  top: 0;
`;
