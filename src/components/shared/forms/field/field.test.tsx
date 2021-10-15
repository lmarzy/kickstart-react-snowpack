import React from 'react';

import { render, screen } from '@testing-library/react';

import { Field } from './field';

describe('<Field />', () => {
  test('renders a label with correct id', () => {
    render(
      <Field id="inputId" label="Label">
        Field
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'inputId');
  });

  test('renders a legend', () => {
    render(
      <Field as="fieldset" label="Label">
        Field
      </Field>
    );

    expect(screen.getByText('Label')).not.toHaveAttribute('for', 'inputId');
  });
});
