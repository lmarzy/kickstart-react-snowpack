import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { UserMenu } from './user-menu';

describe('UserMenu Component', () => {
  const mockFn = jest.fn();

  test('renders the component', () => {
    render(<UserMenu displayName="Fred Bloggs" onLogout={mockFn} />);

    expect(screen.getByText('Fred Bloggs')).toBeInTheDocument();
  });

  test('calls the logout function', () => {
    render(<UserMenu displayName="Fred Bloggs" onLogout={mockFn} />);

    const logoutButton = screen.getByText('Logout');

    fireEvent.click(logoutButton);

    expect(mockFn).toBeCalled();
  });
});
