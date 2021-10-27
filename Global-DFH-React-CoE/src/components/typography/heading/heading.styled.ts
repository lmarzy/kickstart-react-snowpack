import styled, { css } from 'styled-components';

import { FontSizeType, FontWeightType, SpacingType } from '../../../shared/types-styles';
import { vr } from '../../../styles/utils/vr';

interface StyledHeadingProps {
  $size: FontSizeType;
  $weight?: FontWeightType;
  $mb?: SpacingType;
  $mt?: SpacingType;
  $bb?: boolean;
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-size: var(--size-${({ $size }) => $size});
  line-height: ${({ $size }) => vr($size)};

  ${({ $weight }) =>
    $weight &&
    css`
      font-weight: var(--font-weight-${$weight});
    `}

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

  ${({ $bb, $mb }) =>
    $bb &&
    css`
      padding-bottom: var(--spacing-${$mb});
      border-bottom: 1px solid var(--col-grey-light);
    `}
`;
