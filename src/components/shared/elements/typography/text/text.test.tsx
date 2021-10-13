import { render, screen } from '@testing-library/react';
import React from 'react';

import { Text } from './text';

describe('Heading Component', () => {
  test('renders a heading', () => {
    render(<Text>Lorem, ipsum.</Text>);

    expect(screen.getByText('Lorem, ipsum.')).toBeInTheDocument();
  });
});
