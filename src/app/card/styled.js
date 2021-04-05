import styled from 'styled-components';

export const ListWrap = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  max-width: 800px;
  justify-content: center;
  margin: auto;
  ${props => props.theme.media.tablet`
    grid-template-columns: repeat(2, 400px);
  `};
  ${props => props.theme.media.ultraWide`
    max-width: 1200px;
    grid-template-columns: repeat(2, 600px);
  `};
`;

export const Wrapper = styled.div`
  background-image: url(${props => props.image});
  background-color: ${props => props.backgroundColor || props.theme.colours.support};
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
  border-radius: ${props => props.theme.borderRadius};
  height: 60vw;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  max-height: 325px;
  z-index: 1;
  transition: box-shadow 0.3s, transform 0.3s;
  transition-timing-function: ease-in-out;
  min-width: 45vw;
  width: 90vw;
  ${props => props.isHeader && `
    margin: 0 auto 16px auto;
    width: 100%;
  `};
  ${props => props.theme.media.tablet`
    ${props.isHeader && `
      margin: 16px auto;
      max-width: 800px;
    `};
    ${!props.isHeader && `
      min-width: 400px;
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
  display: flex;
  align-items: center;
  color: white;
  bottom: 0;
  position: absolute;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,100), rgba(0,0,0,0));
  max-height: 75px;
  border-radius: 0px 0px 16px 0px;
`;

export const Project = styled.div`
  margin-left: 16px;
  text-align: left;
`;

export const Skill = styled.div`
  margin-left: auto;
  margin-right: 16px;
  text-align: right;
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

export const ButtonLink = styled.button.attrs(() => ({ type: 'button' }))`
  border: none;
  background: transparent;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
