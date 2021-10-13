import styled from 'styled-components';

import { mediaQuery } from '~/styles/utils';

export const StyledHeading = styled.h1`
  font-size: var(--size-3);
  margin-bottom: var(--spacing-2);
  color: var(--col-primary);

  ${mediaQuery('max', 'md')} {
    background-color: red;
  }

  ${mediaQuery('min', 'sm')} {
    background-color: orange;
  }
`;
