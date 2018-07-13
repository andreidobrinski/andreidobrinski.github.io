import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../work/styled';

class ScrollToTop extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop;
