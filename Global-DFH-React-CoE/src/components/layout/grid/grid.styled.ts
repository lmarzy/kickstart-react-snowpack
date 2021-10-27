import styled from 'styled-components';

import { GridItemProps } from './grid';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--spacing-4);
`;

export const StyledGridItem = styled.div<GridItemProps>`
  grid-column: span ${({ span }) => span};
`;
