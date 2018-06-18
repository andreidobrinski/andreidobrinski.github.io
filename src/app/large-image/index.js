import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image, SourceText } from './styled';

const LargeImage = props => (
  <Wrapper>
    <Image
      src={props.image}
      alt={props.alt}
    />
    <SourceText>
      {props.cite}
    </SourceText>
  </Wrapper>
);

LargeImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cite: PropTypes.string,
};

LargeImage.defaultProps = {
  cite: '',
};

export default LargeImage;
