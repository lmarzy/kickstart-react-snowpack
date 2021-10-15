import React from 'react';

import { render, screen } from '@testing-library/react';

import { Field } from '../..';
import { Select } from './select';

describe('<Select />', () => {
  test('renders a label and select with correct id', () => {
    render(
      <Field id="selectId" label="Label">
        <Select
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
