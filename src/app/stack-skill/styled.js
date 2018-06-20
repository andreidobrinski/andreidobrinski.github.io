import styled from 'styled-components';

export const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacer};
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 16px 0px 16px 0px;
  background-color: rgba(255,255,255,1);
  color: rgba(0,0,0,0.85);
  margin: calc(${props => props.theme.spacer} / 2);
  ${props => props.theme.media.tablet`
    margin: ${props.theme.spacer};
  `};
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 0;
  ${props => props.theme.media.tablet`
    height: 100px;
    width: 100px;
    margin-top: calc(${props.theme.spacer} / 2);
  `};
`;

export const Text = styled.p`
  line-height: 0.5;
  font-size: 1.2rem;
  margin: ${props => props.theme.spacer} calc(${props => props.theme.spacer} / 4) calc(${props => props.theme.spacer} / 2);
  ${props => props.theme.media.tablet`
    font-size: 1.618rem;
    margin: ${props.theme.spacer} calc(${props.theme.spacer} / 4);
  `};
`;
