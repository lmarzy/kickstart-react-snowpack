import React, { FC } from 'react';

import { StyledLabel } from './field.styled';

interface LabelProps {
  id: string;
}

export const Label: FC<LabelProps> = ({ children, id }) => (
  <StyledLabel htmlFor={id}>{children}</StyledLabel>
);
