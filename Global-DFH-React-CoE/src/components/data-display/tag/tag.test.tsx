import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tag } from './tag';

describe('Tag Component', () => {
  test('renders the info tag component', () => {
    render(<Tag type="info">Tag Component</Tag>);

    const tag = screen.getByText('Tag Component');

    expect(tag).toBeInTheDocument();
    expect(tag).toMatchSnapshot();
  });

  test('renders the success tag component', () => {
    render(<Tag type="success">Tag Component</Tag>);

    const tag = screen.getByText('Tag Component');

    expect(tag).toBeInTheDocument();
    expect(tag).toMatchSnapshot();
  });

  test('renders the warning tag component', () => {
    render(<Tag type="warning">Tag Component</Tag>);

    const tag = screen.getByText('Tag Component');

    expect(tag).toBeInTheDocument();
    expect(tag).toMatchSnapshot();
  });

  test('renders the error tag component', () => {
    render(<Tag type="error">Tag Component</Tag>);

    const tag = screen.getByText('Tag Component');

    expect(tag).toBeInTheDocument();
    expect(tag).toMatchSnapshot();
  });
});
