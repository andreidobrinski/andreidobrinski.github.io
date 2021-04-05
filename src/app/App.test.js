import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

jest.mock('./analytics/wrap', () => {
  return {
    __esModule: true,
    default: ({children}) => <>{children}</>
  }
});

jest.mock('react-ga', () => {
  return {
    // __esModule: true,
    OutboundLink: () => <a></a>
  }
})

describe('The App component ', () => {
  test('renders without crashing', () => {
    render(<App />)
  })
});