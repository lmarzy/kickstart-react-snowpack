import styled, { css } from 'styled-components';

export const StyledHeightsTable = styled.table`
  text-align: left;

  td {
    height: 80px;
  }
`;

const example = css`
  width: 40px;
  background-color: var(--col-grey-medium);
`;

export const StyledHeightsTiny = styled.div`
  ${example}
  height: var(--height-tiny);
`;

export const StyledHeightsSmall = styled.div`
  ${example}
  height: var(--height-small);
`;

export const StyledHeightsMedium = styled.div`
  ${example}
  height: var(--height-medium);
`;

export const StyledHeightsLarge = styled.div`
  ${example}
  height: var(--height-large);
`;
