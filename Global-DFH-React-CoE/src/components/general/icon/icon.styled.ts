import styled, { css } from 'styled-components';

import { ColorAllType, FontSizeType } from '../../../shared/types-styles';

interface StyledIconProps {
  $color: ColorAllType;
  $size?: FontSizeType;
}

export const StyledIcon = styled.svg<StyledIconProps>`
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: var(--col-${({ $color }) => $color});

  ${({ $size }) =>
    $size &&
    css`
      font-size: var(--size-${$size});
    `}
`;
