import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Overlay, Product, Skill } from './styled';

const Card = props => (
  <Wrapper
    header={props.header}
    image={props.image}
  >
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
  header: PropTypes.bool,
  image: PropTypes.shape({}).isRequired,
};

Card.defaultProps = {
  header: false,
};

export default Card;
