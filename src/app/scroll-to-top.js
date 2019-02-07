import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../work/styled';

const ScrollToTop = ({ children }) => {
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ScrollToTop;
