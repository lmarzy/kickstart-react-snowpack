import React from 'react';
import { render, screen } from '@testing-library/react';

import { Description } from './description';

describe('Description Component', () => {
  test('renders the component', () => {
    render(
      <Description
        data={[
          { term: 'Long term', description: 'description 1' },
          { term: 'Term', description: 'description 2' },
        ]}
      />
    );

    expect(screen.getByText('Long term:')).toBeInTheDocument();
    expect(screen.getByText('description 1')).toBeInTheDocument();
    expect(screen.getByText('Term:')).toBeInTheDocument();
    expect(screen.getByText('description 2')).toBeInTheDocument();
  });
});
