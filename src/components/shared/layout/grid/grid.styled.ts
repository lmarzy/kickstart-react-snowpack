import styled, { css } from 'styled-components';

import { mediaQuery } from '~/styles/utils';

import { gridColumns } from '../../../../styles/settings';
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

export const StyledGridItem = styled.div<GridItemProps>`
  grid-column: span ${({ $span }) => $span};

  ${({ $bpSm }) =>
    $bpSm &&
    css`
      ${mediaQuery('min', 'sm')} {
        grid-column: span ${$bpSm};
      }
    `};

  ${({ $bpMd }) =>
    $bpMd &&
    css`
      ${mediaQuery('min', 'md')} {
        grid-column: span ${$bpMd};
      }
    `};

  ${({ $bpLg }) =>
    $bpLg &&
    css`
      ${mediaQuery('min', 'lg')} {
        grid-column: span ${$bpLg};
      }
    `};
`;
