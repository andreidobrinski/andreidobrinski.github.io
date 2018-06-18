import React from 'react';
import PropTypes from 'prop-types';
import { selectProjectName, selectProjectSkill, selectProjectImage } from './selectors';
import { Wrapper, Overlay, Project, Skill } from './styled';

const Card = ({
  isHeader, project,
}) => (
  <Wrapper
    isHeader={isHeader}
    image={selectProjectImage(project)}
  >
    <Overlay>
      <Project>
        <p>{selectProjectName(project)}</p>
      </Project>
      <Skill>
        <p>{selectProjectSkill(project)}</p>
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
