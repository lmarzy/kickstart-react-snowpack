import React, { FC } from 'react';

import { StyledGrid, StyledGridItem } from './grid.styled';

export interface GridProps {
  Item: FC<GridItemProps>;
}

const Grid: FC & GridProps = ({ children }) => (
  <StyledGrid>{children}</StyledGrid>
);

export type GridColumnType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps {
  span: GridColumnType;
  bpSm?: GridColumnType;
  bpMd?: GridColumnType;
  bpLg?: GridColumnType;
}

const Item: FC<GridItemProps> = ({ children, bpSm, bpMd, bpLg, span }) => (
  <StyledGridItem $span={span} $bpSm={bpSm} $bpMd={bpMd} $bpLg={bpLg}>
    {children}
  </StyledGridItem>
);

Grid.Item = Item;

export { Grid };
