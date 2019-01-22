import ReactGA from 'react-ga';

export const EmailEvent = () => {
  ReactGA.event({
    category: 'Contact',
    action: 'Copied Email',
  });
};

export const AboutMeEvent = () => {
  ReactGA.event({
    category: 'Learn More',
    action: 'About Me Clicked',
  });
};

export const LTWebEvent = () => {
  ReactGA.event({
    category: 'LT',
    action: 'Web Clicked',
  });
};

export const LTIosEvent = () => {
  ReactGA.event({
    category: 'LT',
    action: 'Ios Clicked',
  });
};

export const LTDesignEvent = () => {
  ReactGA.event({
    category: 'LT',
    action: 'Design Clicked',
  });
};
