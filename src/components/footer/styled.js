import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
`;

export const IconWrap = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 8px;
  background-image: url("${props => props.icon}");
  background-repeat: no-repeat;
  background-size: cover;

  & > svg {
    fill: #000000;
  }
`;
