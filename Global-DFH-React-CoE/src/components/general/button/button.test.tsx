import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button Component', () => {
  test('renders a button', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('applies default button type', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(<Button type="submit">Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies valid attribute to element', () => {
    render(<Button aria-label="Test">Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
