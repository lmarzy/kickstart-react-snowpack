import React from 'react';
import { render, screen } from '@testing-library/react';

import { VisuallyHidden } from './visually-hidden';

describe('VisuallyHidden Component', () => {
  test('renders a heading', () => {
    render(<VisuallyHidden>Lorem, ipsum.</VisuallyHidden>);

    expect(screen.getByText('Lorem, ipsum.')).toBeInTheDocument();
  });
});
