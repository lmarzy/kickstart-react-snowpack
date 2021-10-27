import React from 'react';
import { render, screen } from '@testing-library/react';

import { Badge } from './badge';

describe('Badge Component', () => {
  test('renders an info badge component', () => {
    render(<Badge type="info">2</Badge>);

    const badge = screen.getByText('2');

    expect(badge).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });

  test('renders an success badge component', () => {
    render(<Badge type="success">2</Badge>);

    const badge = screen.getByText('2');

    expect(badge).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });

  test('renders an warning badge component', () => {
    render(<Badge type="warning">2</Badge>);

    const badge = screen.getByText('2');

    expect(badge).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });

  test('renders an error badge component', () => {
    render(<Badge type="error">2</Badge>);

    const badge = screen.getByText('2');

    expect(badge).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });
});
