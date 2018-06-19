import React from 'react';
import PropTypes from 'prop-types';
import Skills from './skills';
import { Wrap, Icon, Text } from './styled';

const StackSkill = ({ skill }) => (
  <Wrap>
    <Icon
      src={Skills[skill].image}
      alt={`${Skills[skill].name} icon`}
    />
    <Text>
      {Skills[skill].name}
    </Text>
  </Wrap>
);

StackSkill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default StackSkill;
