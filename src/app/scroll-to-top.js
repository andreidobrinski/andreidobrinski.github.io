import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../work/styled';

class ScrollToTop extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ScrollToTop;
