import styled, { css } from 'styled-components';

import { SpacingType } from '../../../shared/types-styles';

import { AsTag } from './field';

interface StyledLabelProps {
  as?: 'label' | 'legend';
}

export const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  margin-bottom: var(--spacing-1);
  margin-left: 2px;
  font-size: var(--size-2);

  ${({ as }) =>
    as === 'legend' &&
    css`
      font-size: var(--size-3);
      margin-bottom: var(--spacing-4);
      margin-left: 0;
    `}
`;

interface StyledFieldProps {
  as: AsTag;
  $mb?: SpacingType;
  $mt?: SpacingType;
}

export const StyledField = styled.div<StyledFieldProps>`
  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: var(--spacing-${$mb});
    `}

  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: var(--spacing-${$mt});
    `}
`;
