import React from 'react';
import PropTypes from 'prop-types';
import Projects from './projects';
import { Wrapper, Overlay, Project, Skill } from './styled';

const Card = ({
  isHeader, project,
}) => (
  <Wrapper
    isHeader={isHeader}
    image={Projects[project].image}
  >
    <Overlay>
      <Project>
        <p>{Projects[project].name}</p>
      </Project>
      <Skill>
        <p>{Projects[project].skill}</p>
      </Skill>
    </Overlay>
  </Wrapper>
);

Card.propTypes = {
  project: PropTypes.string.isRequired,
  isHeader: PropTypes.bool,
};

Card.defaultProps = {
  isHeader: false,
};

export default Card;
