import styled from 'styled-components';

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.theme.media.tablet`
    flex-direction: row;
  `}
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const InstagramWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
