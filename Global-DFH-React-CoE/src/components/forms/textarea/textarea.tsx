import React, { FC, TextareaHTMLAttributes } from 'react';

import { StyledTextarea } from '../styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
}

export const Textarea: FC<InputProps> = ({ id, ...props }) => (
  <StyledTextarea id={id} {...props} />
);
