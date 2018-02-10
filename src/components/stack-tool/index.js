import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Icon, Text } from './styled';

const StackTool = props => (
  <Wrap>
    <Icon
      src={props.image}
      alt={props.alt}
    />
    <Text>
      {props.tool}
    </Text>
  </Wrap>
);

StackTool.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
};

export default StackTool;
