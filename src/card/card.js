import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Overlay, Product, Skill } from './styled';

const Card = props => (
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

Card.propTypes = {
  product: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  noHover: PropTypes.bool,
  image: PropTypes.shape({}).isRequired,
};

Card.defaultProps = {
  noHover: false,
};

export default Card;
