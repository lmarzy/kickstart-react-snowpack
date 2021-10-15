import styled, { css } from 'styled-components';

import { gridColumns } from '~/styles/settings';
import { mediaQuery } from '~/styles/utils';

import { GridColumnType } from './grid';

interface GridItemProps {
  $span: GridColumnType;
  $bpSm?: GridColumnType;
  $bpMd?: GridColumnType;
  $bpLg?: GridColumnType;
}

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${gridColumns}, 1fr);
  gap: var(--spacing-2);
`;

const getMediaQuery = (type: 'sm' | 'md' | 'lg', bp: number) => {
  return css`
    ${mediaQuery('min', type)} {
      grid-column: span ${bp};
    }
  `;
};

export const StyledGridItem = styled.div<GridItemProps>`
  grid-column: span ${({ $span }) => $span};

  ${({ $bpSm }) => $bpSm && getMediaQuery('sm', $bpSm)};

  ${({ $bpMd }) => $bpMd && getMediaQuery('md', $bpMd)};

  ${({ $bpLg }) => $bpLg && getMediaQuery('lg', $bpLg)};
`;
