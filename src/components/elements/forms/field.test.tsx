import { render, screen } from '@testing-library/react';
import React from 'react';

import { Field } from './field';

describe('Field Component', () => {
  test('renders a label and input with correct id', () => {
    render(
      <Field>
        <Field.Label id="inputId">Label</Field.Label>
        <Field.Input id="inputId" />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'inputId');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'inputId');
  });

  test('renders a label and textarea with correct id', () => {
    render(
      <Field>
        <Field.Label id="textareaId">Label</Field.Label>
        <Field.Textarea id="textareaId" />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'textareaId');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'textareaId');
  });

  test('renders a label and select with correct id', () => {
    render(
      <Field>
        <Field.Label id="selectId">Label</Field.Label>
        <Field.Select
          id="selectId"
          options={[
            { id: '1', value: '1' },
            { id: '2', value: '2' },
          ]}
        />
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'selectId');
    expect(screen.getByLabelText('Label')).toHaveAttribute('id', 'selectId');
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
