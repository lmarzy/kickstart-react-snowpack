import React from 'react';

import { render, screen } from '@testing-library/react';

import { Field } from '../field/field';
import { Input } from './input';

describe('<Input />', () => {
  test('renders a label and input with correct id', () => {
    render(
      <Field id="inputId" label="Label">
        <Input id="inputId" />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'inputId');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'inputId');
  });
});
