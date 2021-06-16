import styled, { css } from 'styled-components';

import { FontSizeType, ColorType } from '../../../shared/types-styles';

interface StyledTextProps {
  $size?: FontSizeType;
  $color?: ColorType;
}

export const StyledText = styled.p<StyledTextProps>`
  ${({ $size }) =>
    $size &&
    css`
      font-size: var(--size-${$size});
    `};
  ${({ $color }) =>
    $color &&
    css`
      color: var(--col-${$color});
    `}
`;
