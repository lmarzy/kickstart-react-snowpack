import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { Alert } from './alert';

describe('Alert Component', () => {
  afterEach(cleanup);

  test('renders an info alert', () => {
    render(<Alert type="info">Info Alert</Alert>);

    const alert = screen.getByText('Info Alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });

  test('renders an success alert', () => {
    render(<Alert type="success">Success Alert</Alert>);

    const alert = screen.getByText('Success Alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });

  test('renders an warning alert', () => {
    render(<Alert type="warning">Warning Alert</Alert>);

    const alert = screen.getByText('Warning Alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });

  test('renders an error alert', () => {
    render(<Alert type="error">Error Alert</Alert>);

    const alert = screen.getByText('Error Alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toMatchSnapshot();
  });
});
