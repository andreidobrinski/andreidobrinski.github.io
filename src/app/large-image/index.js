import React from 'react';
import PropTypes from 'prop-types';
import { Image, SourceText } from './styled';

const LargeImage = props => (
  <div>
    <Image
      src={props.image}
      alt={props.alt}
    />
    <SourceText>
      {props.cite}
    </SourceText>
  </div>
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
