import React from 'react';
import { render, screen } from '@testing-library/react';

import { Cta } from './cta';

describe('Cta Component', () => {
  test('renders a accept button', () => {
    render(<Cta variant="accept" infoText="accept request" />);

    expect(screen.getByText('accept request')).toBeInTheDocument();
    expect(screen.getByText('Icon check')).toBeInTheDocument();
  });

  test('renders a reject button', () => {
    render(<Cta variant="reject" infoText="reject request" />);

    expect(screen.getByText('reject request')).toBeInTheDocument();
    expect(screen.getByText('Icon cross')).toBeInTheDocument();
  });

  test('renders a remove button', () => {
    render(<Cta variant="remove" infoText="remove item" />);

    expect(screen.getByText('remove item')).toBeInTheDocument();
    expect(screen.getByText('Icon bin')).toBeInTheDocument();
  });
});
