import React from 'react';
import { render, screen } from '@testing-library/react';

import { Icon } from './icon';

describe('Icon Component', () => {
  test('renders a logout icon', () => {
    render(<Icon name="logout" />);

    expect(screen.getByText('Icon logout')).toBeInTheDocument();
  });

  test('renders a bin icon', () => {
    render(<Icon name="bin" />);

    expect(screen.getByText('Icon bin')).toBeInTheDocument();
  });
});
