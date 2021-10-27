import React, { FC } from 'react';

import { SpacingType } from '../../../shared/types-styles';

import { StyledLabel, StyledField } from './field.styled';

export type AsTag = 'div' | 'fieldset';

export interface FieldProps {
  as?: AsTag;
  id?: string;
  label: string;
  mb?: SpacingType;
  mt?: SpacingType;
}

export const Field: FC<FieldProps> = ({ as = 'div', id, label, mb, mt, children }) => (
  <StyledField as={as} $mb={mb} $mt={mt}>
    {as === 'fieldset' ? (
      <StyledLabel as="legend">{label}</StyledLabel>
    ) : (
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    )}
    {children}
  </StyledField>
);
