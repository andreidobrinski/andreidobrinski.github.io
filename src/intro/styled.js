import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 600px) 1fr;
  grid-template-rows: 250px 1fr;
  justify-items: center;
`;

export const TextWrap = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export const Text = styled.p`
  color: ${props => props.theme.colours.text};
  text-align: left;
  font-size: 2em;
  line-height: 1.618em;
  margin-left: 112px;
`;

export const ADLogo = styled.img`
  grid-column: 2;
  grid-row: 1;
  top: 0;
`;
