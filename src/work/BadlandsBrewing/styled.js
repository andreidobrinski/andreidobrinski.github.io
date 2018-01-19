import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

export const Content = styled.div`
  ${'' /* max-width: 800px; */}
  grid-column-start: 2;
  grid-column-end: 3;
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
  grid-column-start: 2;
  grid-column-end: 3;
  max-width: 600px;
`;

export const StackIcon = styled.img`
  height: 100px;
  width: 100px;
`;
