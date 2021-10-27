import React from 'react';
import { render, screen } from '@testing-library/react';

import { Table } from './table';

describe('Table Component', () => {
  test('renders the component', () => {
    render(
      <Table headings={['Heading 1', 'Heading 2']}>
        <tr>
          <td>One</td>
          <td>Two</td>
        </tr>
      </Table>
    );

    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});
