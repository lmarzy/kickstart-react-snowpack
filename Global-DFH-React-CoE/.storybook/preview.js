import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { GlobalStyles } from '../src/styles/global';

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyles />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'GETTING STARTED',
        ['Introduction', 'Installing', 'Test'],
        'DESIGN TOKENS',
        ['Introduction', 'Typography', 'Colors', 'Spacing', 'Heights'],
        'Components',
        ['Global', 'General', 'Layout', 'Typography', 'Forms', 'DataDisplay', 'feedback'],
      ],
    },
  },
};
