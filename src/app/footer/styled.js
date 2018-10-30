import styled, { css } from 'styled-components';
import { BodyTextStyles } from '../../work/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CtaWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px 56px 56px 1fr;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 32px;
`;

const StyledIcons = css`
  justify-self: center;
  width: 40px;
  height: 40px;
  margin: 8px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  & > svg {
    transition: fill 0.3s;
    fill: #000000;
    :hover {
      fill: ${props => props.theme.colours.link};
    }
  }
`;

export const EmailButton = styled.button.attrs({
  type: 'button',
})`
  ${StyledIcons};
  border: none;
  cursor: pointer;
  grid-column: 2;
  padding: 0;
  margin-top: 10px;
`;

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${StyledIcons};
  grid-column: ${props => (props.center ? '3' : '4')};
`;

export const Message = styled.p`
  grid-column: 2 / 5;
  justify-self: center;
  ${BodyTextStyles};
  font-family: ${props => props.theme.fonts.header};
  margin: 64px 0px 0px;
`;
