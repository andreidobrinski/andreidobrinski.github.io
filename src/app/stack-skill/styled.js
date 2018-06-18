import styled from 'styled-components';

export const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 16px 0px 16px 0px;
  background-color: rgba(255,255,255,1);
  color: rgba(0,0,0,0.85);
  margin: 16px;
`;

export const Icon = styled.img`
  height: 100px;
  width: 100px;
  margin-top: calc(${props => props.theme.spacer} / 2);
`;

export const Text = styled.p`
  line-height: 0.65rem;
  margin: ${props => props.theme.spacer} calc(${props => props.theme.spacer} / 4);
`;
