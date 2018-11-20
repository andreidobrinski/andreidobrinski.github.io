import React from 'react';
import PropTypes from 'prop-types';
import { Image, SourceText } from './styled';

const LargeImage = ({ image, alt, cite }) => (
  <div>
    <Image
      src={image}
      alt={alt}
    />
    <SourceText>
      {cite}
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
