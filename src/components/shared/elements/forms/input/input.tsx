import React, { FC, InputHTMLAttributes } from 'react';

import { StyledInput } from '../field.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const Input: FC<InputProps> = ({ id, ...props }) => (
  <StyledInput id={id} {...props} />
);
