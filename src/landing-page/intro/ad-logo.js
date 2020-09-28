import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

const animate = css`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  @keyframes dash {
    50% {
      stroke-dashoffset: 0;
    }
    80% {
      stroke-dashoffset: 1000;
    }
  }
  animation: dash 2s linear forwards;
`;

const Svg = styled.svg`
  grid-column: 2;
  grid-row: 1;
  align-self: center;

  #logo {
    @keyframes fill {
      0% {
        fill: transparent;
      }
      100% {
        fill: #5d5d5d;
      }
    }
    animation: fill 2s ease-in forwards;
  }

  #vertical {
    ${animate};
  }
  #top-left,
  #top-right {
    ${animate};
    animation-delay: 300ms;
  }
  #bottom-left,
  #bottom-right,
  #horizontal {
    ${animate};
    animation-delay: 400ms;
  }
`;

const AdLogo = ({ height }) => (
  <Svg width="167px" height={`${height}px`} viewBox="0 0 167 167" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="logo" fillOpacity="0.8" strokeWidth="2" stroke="#5d5d5d" fill="transparent">
      <rect id="vertical" transform="translate(83.500000, 83.500000) scale(-1, -1) translate(-83.500000, -83.500000) " x="71.5" y="6.5" width="24" height="154" rx="12" strokeWidth="2" stroke="#5d5d5d" />
      <rect id="top-left" transform="translate(50.911688, 51.006836) scale(-1, 1) rotate(-45.000000) translate(-50.911688, -51.006836) " x="38.9116882" y="-6.9931637" width="24" height="116" rx="12" strokeWidth="2" stroke="#5d5d5d" />
      <rect id="top-right" transform="translate(115.911688, 50.911688) rotate(-45.000000) translate(-115.911688, -50.911688) " x="103.911688" y="-7.08831175" width="24" height="116" rx="12" strokeWidth="2" stroke="#5d5d5d" />
      <rect id="bottom-right" transform="translate(115.911688, 115.911688) rotate(45.000000) translate(-115.911688, -115.911688) " x="103.911688" y="57.9116882" width="24" height="116" rx="12" strokeWidth="2" stroke="#5d5d5d" />
      <rect id="bottom-left" transform="translate(34.596194, 99.596194) scale(-1, 1) rotate(45.000000) translate(-34.596194, -99.596194) " x="22.5961941" y="64.6697872" width="24" height="69.8528137" rx="12" strokeWidth="2" stroke="#5d5d5d" />
      <rect id="horizontal" transform="translate(50.750000, 83.500000) scale(1, -1) rotate(-90.000000) translate(-50.750000, -83.500000) " x="38.75" y="39.25" width="24" height="88.5" rx="12" strokeWidth="2" stroke="#5d5d5d" />
    </g>
  </Svg>
);

AdLogo.propTypes = {
  height: PropTypes.number,
};

AdLogo.defaultProps = {
  height: 167,
};

export default AdLogo;
