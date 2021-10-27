import { render, screen } from '@testing-library/react';
import React, { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Nav } from './nav';

interface SubComponentProps {
  count: number;
}

const SubComponent: FC<SubComponentProps> = ({ count }) => <span>{count}</span>;

describe('Nav Component', () => {
  test('renders the component', () => {
    render(
      <MemoryRouter>
        <Nav
          routes={[
            {
              path: '/',
              exact: true,
              linkName: 'Nav link one',
            },
            {
              path: '/two',
              exact: false,
              linkName: 'Nav link two',
            },
          ]}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Nav link one')).toBeInTheDocument();
    expect(screen.getByText('Nav link two')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Nav link one' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByRole('link', { name: 'Nav link two' })).toHaveAttribute(
      'href',
      '/two'
    );
  });

  test('renders the sub component', () => {
    render(
      <MemoryRouter>
        <Nav
          routes={[
            {
              path: '/',
              exact: true,
              linkName: 'Nav link one',
              component: <SubComponent count={10} />,
            },
            {
              path: '/two',
              exact: false,
              linkName: 'Nav link two',
              component: <SubComponent count={2} />,
            },
          ]}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
