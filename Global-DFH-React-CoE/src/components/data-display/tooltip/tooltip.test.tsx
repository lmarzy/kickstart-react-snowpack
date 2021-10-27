import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tooltip } from './tooltip';

describe('Tooltip Component', () => {
  test('renders the component', () => {
    render(<Tooltip position="top" content="tooltip content..." />);

    expect(screen.getByText('tooltip content...')).toBeInTheDocument();
  });
});
