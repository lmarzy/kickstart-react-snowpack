import React, { ChangeEvent, FC } from 'react';

import { StyledLabel, StyledInput, StyledSpan } from './input-button.styled';

export interface InputButtonProps {
  type: 'radio' | 'checkbox';
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputButton: FC<InputButtonProps> = ({
  type,
  id,
  name,
  value,
  checked,
  onChange,
  children,
}) => (
  <StyledLabel htmlFor={id}>
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <StyledSpan>{children}</StyledSpan>
  </StyledLabel>
);
