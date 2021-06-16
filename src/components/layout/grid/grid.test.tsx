import { render, screen } from '@testing-library/react';
import React from 'react';

import { Grid } from './grid';

describe('Grid Component', () => {
  test('renders the children of the flex container', () => {
    render(
      <Grid>
        <Grid.Item span={6}>1</Grid.Item>
        <Grid.Item span={6}>2</Grid.Item>
      </Grid>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
