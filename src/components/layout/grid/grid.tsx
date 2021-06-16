import React, { FC } from 'react';

import { StyledGrid, StyledGridItem } from './grid.styled';

export interface GridProps {
  Item: FC<GridItemProps>;
}

const Grid: FC & GridProps = ({ children }) => (
  <StyledGrid>{children}</StyledGrid>
);

export interface GridItemProps {
  span: number;
}

const Item: FC<GridItemProps> = ({ children, span }) => (
  <StyledGridItem span={span}>{children}</StyledGridItem>
);

Grid.Item = Item;

export { Grid };
