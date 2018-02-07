import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colours.background};
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0px 8px;
`;

export const Summary = styled.h2`
  font-size: 2.619em;
  color: ${props => props.theme.colours.text};
`;

export const Header = styled.h3`
  font-size: 2.619em;
  color: ${props => props.theme.colours.text};
`;

export const Body = styled.p`
  line-height: 1.618;
  font-size: 1.618em;
  color: ${props => props.theme.colours.text};
`;

export const LargeImage = styled.img`
  max-width: 1000px;
  width: 100%;
`;

export const StackIcon = styled.img`
  height: 100px;
  width: 100px;
`;

export const StackToolWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 16px 0px 16px 0px;
  background-color: rgba(255,255,255,1);
  color: rgba(0,0,0,0.85);
  font-size: 1.618em;
`;

export const InstagramWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
