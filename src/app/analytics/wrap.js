import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const initializeGA = () => {
  ReactGA.initialize('UA-131068083-1');
  ReactGA.set({ anonymizeIp: true });
  ReactGA.pageview('/');
};

const PageViewTracker = ({ history, children }) => {
  useEffect(() => {
    initializeGA();
    history.listen(location => ReactGA.pageview(location.pathname));
  });

  return children;
};

PageViewTracker.propTypes = {
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(PageViewTracker);
