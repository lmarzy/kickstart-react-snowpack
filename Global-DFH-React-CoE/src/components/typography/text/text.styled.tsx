import styled, { css } from 'styled-components';

import {
  FontSizeType,
  ColorMainType,
  SpacingType,
  FontWeightType,
} from '../../../shared/types-styles';
import { vr } from '../../../styles/utils/vr';

interface StyledTextProps {
  $size?: FontSizeType;
  $fontWeight?: FontWeightType;
  $color?: ColorMainType;
  $mb?: SpacingType;
  $mt?: SpacingType;
}

export const StyledText = styled.p<StyledTextProps>`
  ${({ $size }) =>
    $size &&
    css`
      font-size: var(--size-${$size});
      line-height: ${vr($size)};
    `};

  ${({ $color }) =>
    $color &&
    css`
      color: var(--col-${$color});
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
  
  ${({ $fontWeight }) =>
    $fontWeight &&
    css`
      font-weight: var(--fontWeight-${$fontWeight});
    `}
`;
