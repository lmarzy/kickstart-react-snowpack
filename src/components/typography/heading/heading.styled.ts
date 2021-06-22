import styled, { css } from 'styled-components';

import { ColorType, FontSizeType, SpacingType } from '~/shared/unions/styles';
import { vr } from '~/styles/utils';

interface StyledHeadingProps {
  $size: FontSizeType;
  $color?: ColorType;
  $mb?: SpacingType;
  $mt?: SpacingType;
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-size: var(--size-${({ $size }) => $size});
  line-height: ${({ $size }) => vr($size)};

  ${({ $color }) =>
    $color &&
    css`
      color: var(--spacing-${$color});
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
