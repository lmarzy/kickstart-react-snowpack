import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import { InputButton } from '../';

import { InputButtonProps } from './input-button';

describe('<InputButton />', () => {
  const renderWithProps = (props: InputButtonProps): RenderResult =>
    render(<InputButton {...props}>Input</InputButton>);

  test('renders a label and radio input with correct id', () => {
    renderWithProps({
      type: 'radio',
      id: 'inputId',
      name: 'name',
      value: 'value',
    });

    expect(screen.getByLabelText('Input')).toHaveAttribute('type', 'radio');
    expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'inputId');
    expect(screen.getByText('Input')).toBeInTheDocument();
  });

  test('renders a label and checkbox input with correct id', () => {
    renderWithProps({
      type: 'checkbox',
      id: 'inputId',
      name: 'name',
      value: 'value',
    });

    expect(screen.getByLabelText('Input')).toHaveAttribute('type', 'checkbox');
    expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'inputId');
    expect(screen.getByText('Input')).toBeInTheDocument();
  });
});
