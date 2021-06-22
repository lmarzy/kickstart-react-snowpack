import styled, { css } from 'styled-components';

import { FontSizeType, ColorType, SpacingType } from '~/shared/unions/styles';
import { vr } from '~/styles/utils';

interface StyledTextProps {
  $size?: FontSizeType;
  $color?: ColorType;
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
`;
