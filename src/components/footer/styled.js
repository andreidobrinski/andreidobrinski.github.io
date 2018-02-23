import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
`;

const StyledIcons = css`
  display: flex;
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

  &:focus {
    outline-style: none;
  }
`;

export const SocialLink = styled.a`
  ${StyledIcons};
`;

export const CopiedConfirm = styled.div`
  display: flex;
  flex-direction: column;
`;
