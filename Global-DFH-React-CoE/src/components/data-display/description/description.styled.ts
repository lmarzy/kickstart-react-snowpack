import styled from 'styled-components';

export const StyledDl = styled.dl`
  font-size: var(--size-2);

  dt {
    display: inline-block;
    margin-right: var(--spacing-1);

    &:not(:last-of-type) {
      margin-bottom: var(--spacing-1);
    }
  }

  dd {
    display: inline;
    font-weight: 500;
  }

  dd::after {
    content: '\\a';
    white-space: pre;
  }
`;
