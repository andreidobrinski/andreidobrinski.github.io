import React from 'react';
import PropTypes from 'prop-types';
import { selectImage, selectAltText, selectTitle } from './selectors';
import { Wrap, Icon, Text } from './styled';

const StackSkill = ({ skill }) => (
  <Wrap>
    <Icon
      src={selectImage(skill)}
      alt={selectAltText(skill)}
    />
    <Text>
      {selectTitle(skill)}
    </Text>
  </Wrap>
);

StackSkill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default StackSkill;
