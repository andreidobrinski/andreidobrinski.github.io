import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-rows: 32px 1fr;
  grid-template-columns: 1fr 56px 56px 56px 1fr;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  perspective: 750px;
`;

const StyledIcons = css`
  grid-row: 2 / 3;
  justify-self: center;
  width: 40px;
  height: 40px;
  margin: 8px;
  background-image: url(${props => props.icon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;

  & > svg {
    fill: #000000;
  }
`;

export const EmailButton = styled.button`
  ${StyledIcons};
  border: none;
  cursor: pointer;
  grid-column: 2;

  &:focus {
    outline-style: none;
  }
`;

export const SocialLink = styled.a`
  ${StyledIcons};
  grid-column: ${props => (props.center ? '3' : '4')};
`;

export const CopiedConfirm = styled.div`
  font-size: 1.1618em;
  grid-column: 1 / 6;
  justify-self: center;
  align-self: center;
  cursor: default;

  color: ${props => props.theme.colours.text};

  transition: opacity 1s ease-in, transform 1s ease-in-out;
  transform: ${props => (props.visible ? 'rotateX(0deg)' : 'rotateX(45deg)')};
  opacity: ${props => (props.visible ? '1' : '0')};
`;
