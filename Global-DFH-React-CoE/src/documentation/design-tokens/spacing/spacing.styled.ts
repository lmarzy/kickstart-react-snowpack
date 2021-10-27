import styled, { css } from 'styled-components';

export const StyledSpacingTable = styled.table`
  text-align: left;

  td {
    height: 60px;
  }
`;

const example = css`
  width: 40px;
  background-color: var(--col-blue-50);
`;

export const StyledSpace1 = styled.div`
  ${example}
  height: var(--spacing-1);
`;

export const StyledSpace2 = styled.div`
  ${example}
  height: var(--spacing-2);
`;

export const StyledSpace3 = styled.div`
  ${example}
  height: var(--spacing-3);
`;

export const StyledSpace4 = styled.div`
  ${example}
  height: var(--spacing-4);
`;

export const StyledSpace5 = styled.div`
  ${example}
  height: var(--spacing-5);
`;

export const StyledSpace6 = styled.div`
  ${example}
  height: var(--spacing-6);
`;
