import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url("${props => props.image}");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 400px 500px;
  height: 60vw;
  width: 90vw;
  display: inline-block;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
  max-width: 800px;
  max-height: 533px;
  z-index: 1;
  transition: box-shadow 0.3s, transform 0.3s;
  transition-timing-function: ease-in-out;

  :hover {
    ${props => props.noHover ?
      '' : 'box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.5); transform: scale(1.02, 1.02);'};
  }
`;

export const Overlay = styled.div`
  color: white;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 20%;
  background: linear-gradient(to top, rgba(0,0,0,100), rgba(0,0,0,0));
  max-height: 75px;
`;

export const Product = styled.div`
  position: absolute;
  left: 16px;
  bottom: 0;
`;

export const Skill = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0;
`;
