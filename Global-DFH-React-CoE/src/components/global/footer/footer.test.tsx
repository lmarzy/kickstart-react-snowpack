import { render, screen } from '@testing-library/react';
import React from 'react';

import { Footer } from './footer';

describe('Footer Component', () => {
  const year = new Date().getFullYear();
  test('shows correct details', () => {
    render(<Footer appName="App Name" />);

    expect(screen.getByText(`© Mars ${year} | App Name`)).toBeInTheDocument();
  });
});
