import React from 'react';

import { render, screen } from '@testing-library/react';

import { Field } from '../..';
import { Textarea } from './textarea';

describe('<Textarea />', () => {
  test('renders a label and textarea with correct id', () => {
    render(
      <Field id="textareaId" label="Label">
        <Textarea id="textareaId" />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'textareaId');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'textareaId');
  });
});
