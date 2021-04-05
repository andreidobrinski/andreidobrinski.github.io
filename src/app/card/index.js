import React from 'react';
import PropTypes from 'prop-types';
import Projects from './projects';
import {
  Wrapper, Overlay, Project, Skill, Text,
} from './styled';

const Card = ({
  isHeader, project,
}) => (
  <Wrapper
    isHeader={isHeader}
    image={Projects[project].image}
    backgroundColor={Projects[project].backgroundColor}
    as={isHeader ? 'div' : 'article'}
  >
    {!isHeader && (
      <Overlay>
        <Project style={{ fontWeight: 'bold' }}>
          <Text>{Projects[project].name}</Text>
        </Project>
        <Skill>
          <Text>{Projects[project].skill}</Text>
        </Skill>
      </Overlay>
    )}
  </Wrapper>
);

Card.propTypes = {
  project: PropTypes.oneOf(Object.keys(Projects)).isRequired,
  isHeader: PropTypes.bool,
};

Card.defaultProps = {
  isHeader: false,
};

export default Card;
