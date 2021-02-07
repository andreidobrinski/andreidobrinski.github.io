import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../app/theme';
import { LearningList } from './list';
import { learning } from './years';

const setup = () => render(
  <ThemeProvider theme={theme}>
    <LearningList />
  </ThemeProvider>
);

describe('The learning list component', () => {
  it('loads without crashing', () => {
    setup();
  });

  it ('renders the correct number of children', () => {
    const { container } = setup();

    const children = container.querySelectorAll('p');

    const itemCount = learning.length;

    expect(itemCount).toEqual(children.length);
  });
});