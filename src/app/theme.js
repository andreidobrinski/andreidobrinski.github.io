import { css } from 'styled-components';

const sizes = {
  smallTablet: 630,
  tablet: 880,
  desktop: 992,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  return {
    ...accumulator,
    [label]: (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `,
  };
}, {});

export const colours = {
  link: '#61DBFF',
  cta: '#062F70',
  support: '#FFFFFF',
  text: 'rgba(0,0,0,0.85)',
  background: 'rgba(0,0,0,0.02)',
};

export const fonts = {
  header: '"Oxygen", "sans-serif"',
  body: '"Bitter", "serif"',
};

export const spacer = '16px';

export default {
  media,
  colours,
  fonts,
  spacer,
};
