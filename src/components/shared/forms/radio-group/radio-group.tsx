import React, { ChangeEvent, FunctionComponent } from 'react';

import { Grid } from '../../layout/grid/grid';
import { InputButton } from '../input-button/input-button';

interface Option {
  id: string;
  label: string;
  value: string;
}

export interface RadioGroupProps {
  name: string;
  options: Option[];
  gridSpan?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  name,
  options,
  gridSpan = 4,
  onChange,
}) => (
  <Grid>
    {options.map((option: Option) => (
      <Grid.Item span={gridSpan} key={option.id}>
        <InputButton
          type="radio"
          id={option.id}
          value={option.value}
          name={name}
          onChange={onChange}
        >
          {option.label}
        </InputButton>
      </Grid.Item>
    ))}
  </Grid>
);
