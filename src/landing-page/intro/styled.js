import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 600px) 1fr;
  grid-template-rows: 200px 1fr;
  justify-items: center;
`;

export const TextWrap = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.header};
  color: ${props => props.theme.colours.text};
  text-align: left;
  font-size: 1.4rem;
  ${props => props.theme.media.smallTablet`
    font-size: ${props.theme.ratio.one}rem;
  `};
  margin: 5% 12%;
`;

export const Svg = styled.svg`
  grid-column: 2;
  grid-row: 1;
  align-self: center;

  & > g {
    transition: all 0.5s;
    stroke: transparent;
    fill: #5D5D5D;

    &:hover {
      stroke: #5D5D5D;
      fill: transparent;
    }
  }
`;
