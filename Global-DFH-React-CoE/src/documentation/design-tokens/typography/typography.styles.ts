import styled from 'styled-components';

export const StyledFontSize = styled.div`
  &:not(:last-child) {
    margin-bottom: var(--spacing-4);
  }

  p:not(:last-child) {
    margin-bottom: var(--spacing-1);
  }

  p:nth-of-type(2) {
    font-size: var(--size-1);
    color: var(--col-grey-50);
  }
`;
