import React, { FC, SelectHTMLAttributes } from 'react';

import { StyledSelect } from '../field.styled';

type Option = {
  id: string;
  value: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: Option[];
}

export const Select: FC<SelectProps> = ({ id, options, ...props }) => (
  <StyledSelect id={id} {...props}>
    {options.map((option: Option) => (
      <option key={option.id} value={option.id}>
        {option.value}
      </option>
    ))}
  </StyledSelect>
);
