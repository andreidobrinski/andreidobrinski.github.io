import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0px 8px;
`;

export const Summary = styled.h2`
  font-size: 2.619em;
`;

export const Header = styled.h3`
  font-size: 2.619em;
`;

export const Body = styled.p`
  line-height: 1.618;
  font-size: 1.618em;
  ${'' /* text-align: justify;
  text-justify: inter-word; */}
`;

export const LargeImage = styled.img`
  max-width: 600px;
`;

export const StackIcon = styled.img`
  height: 100px;
  width: 100px;
`;
