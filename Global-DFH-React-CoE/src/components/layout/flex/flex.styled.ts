import styled, { css } from 'styled-components';

import { Direction, Align, Justify } from './flex';

interface StyledFlexProps {
  $direction?: Direction;
  $align?: Align;
  $justify?: Justify;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;

  ${({ $direction }) =>
    $direction &&
    css`
      flex-direction: ${$direction};
    `};

  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `};

  ${({ $justify }) =>
    $justify &&
    css`
      justify-content: ${$justify};
    `}
`;
