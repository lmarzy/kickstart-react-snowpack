import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './header';

describe('Header Component', () => {
  test('shows correct title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('React With Snowpack')).toBeInTheDocument();
  });
});
