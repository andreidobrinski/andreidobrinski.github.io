import { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToTop extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop;
