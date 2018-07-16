import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-rows: 32px 1fr;
  grid-template-columns: 1fr 56px 56px 56px 1fr;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
`;

const StyledIcons = css`
  grid-row: 2 / 3;
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
      fill: ${props => props.theme.colours.main};
    }
  }
`;

export const EmailButton = styled.button`
  ${StyledIcons};
  border: none;
  cursor: pointer;
  grid-column: 2;
  padding: 0;
  margin-top: 10px;

  &:focus {
    outline-style: none;
  }
`;

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  ${StyledIcons};
  grid-column: ${props => (props.center ? '3' : '4')};
`;
