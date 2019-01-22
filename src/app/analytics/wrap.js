import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const initializeGA = () => {
  ReactGA.initialize('UA-131068083-1');
  ReactGA.set({ anonymizeIp: true });
  ReactGA.pageview('/');
};

class PageViewTracker extends Component {
  componentDidMount() {
    const { history } = this.props;
    initializeGA();
    history.listen(location => ReactGA.pageview(location.pathname));
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

PageViewTracker.propTypes = {
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(PageViewTracker);
