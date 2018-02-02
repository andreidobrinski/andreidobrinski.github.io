import React from 'react';
import { Wrapper, Overlay, Product, Skill } from './styled';

const Card = (props) => (
  <Wrapper noHover={props.noHover} image={props.image}>
    <Overlay>
      <Product>
        <p>{props.product}</p>
      </Product>
      <Skill>
        <p>{props.skill}</p>
      </Skill>
    </Overlay>
  </Wrapper>
);

export default Card;
