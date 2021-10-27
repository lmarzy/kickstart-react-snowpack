import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import { RadioGroup } from '../';

import { RadioGroupProps } from './radio-group';

describe('<RadioGroup />', () => {
  const renderWithProps = (props: RadioGroupProps): RenderResult =>
    render(<RadioGroup {...props} />);

  test('renders a label and radio input with correct id', () => {
    renderWithProps({
      name: 'name',
      options: [
        { id: 'id1', label: 'Label 1', value: 'value1' },
        { id: 'id2', label: 'Label 2', value: 'value2' },
        { id: 'id3', label: 'Label 3', value: 'value3' },
      ],
    });

    expect(screen.getByText('Label 1')).toBeInTheDocument();
    expect(screen.getByText('Label 2')).toBeInTheDocument();
    expect(screen.getByText('Label 3')).toBeInTheDocument();
  });
});
