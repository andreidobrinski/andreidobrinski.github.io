import styled from 'styled-components';
import { LinkStyles } from '../../app/styled';

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
  margin: 5% 10%;
  ${props => props.theme.media.smallTablet`
    font-size: ${props.theme.ratio.one}rem;
  `};
  ${props => props.theme.media.tablet`
    margin: 5% 10% 5% 17%;
  `};
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

export const AboutMeButton = styled.button.attrs({
  type: 'button',
})`
  ${LinkStyles};
  border: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
`;
