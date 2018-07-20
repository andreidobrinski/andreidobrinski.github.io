import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: url(${props => props.image});
  background-color: ${props => props.backgroundColor || props.theme.colours.support};
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
  height: 60vw;
  width: ${props => (props.isHeader ? '100%' : '90vw')};
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  margin: 16px auto;
  max-width: 800px;
  max-height: 533px;
  z-index: 1;
  transition: box-shadow 0.3s, transform 0.3s;
  transition-timing-function: ease-in-out;
  ${props => props.isHeader && `
    margin: 0 auto 16px auto;
  `};
  ${props => props.theme.media.tablet`
    ${props.isHeader && `
      margin: 16px auto;
    `};
  `};

  :hover {
    ${props => !props.isHeader && `
      box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.5);
      transform: scale(1.02, 1.02);
    `}
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

export const Project = styled.div`
  position: absolute;
  left: 16px;
  bottom: 0;
`;

export const Skill = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1rem;
  margin-bottom: 8px;
  ${props => props.theme.media.smallTablet`
    font-size: 1.2rem;
    margin-bottom: 16px;
  `};
`;
