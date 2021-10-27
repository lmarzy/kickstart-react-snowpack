import React, { FC } from 'react';

import { StyledFlex } from './flex.styled';

export type Direction = 'column';
export type Align = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface FlexProps {
  tag?: 'div' | 'section';
  direction?: Direction;
  align?: Align;
  justify?: Justify;
}

export const Flex: FC<FlexProps> = ({
  tag = 'div',
  direction,
  align,
  justify,
  children,
}) => (
  <StyledFlex as={tag} $direction={direction} $align={align} $justify={justify}>
    {children}
  </StyledFlex>
);
