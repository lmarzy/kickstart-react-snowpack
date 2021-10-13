import { render, screen } from '@testing-library/react';
import React from 'react';

import { Flex } from './flex';

describe('Flex Component', () => {
  test('renders the children of the flex container', () => {
    render(
      <Flex>
        <div>1</div>
        <div>2</div>
      </Flex>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
