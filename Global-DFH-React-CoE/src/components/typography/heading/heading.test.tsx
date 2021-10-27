import React from 'react';
import { render, screen } from '@testing-library/react';

import { Heading } from './heading';

describe('Heading Component', () => {
  test('renders a heading', () => {
    render(
      <Heading headingLevel="h1" size={1}>
        Heading
      </Heading>
    );

    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
});
