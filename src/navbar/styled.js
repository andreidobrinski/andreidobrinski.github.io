import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 800px;
  height: 20vh;
  margin-bottom: 64px;
  margin-top: 32px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;

  .sticky {
    top: 0;
    position: fixed;
  }
`;

export const NavBarWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: linear-gradient(to bottom, rgba(255,255,255,1.0), rgba(255,255,255,0.0));
  width: 100%;
`;
