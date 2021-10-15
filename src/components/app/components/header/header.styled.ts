import styled from 'styled-components';

import { mediaQuery } from '~/styles/utils';

export const StyledHeader = styled.header`
  margin-bottom: var(--spacing-2);
  color: var(--col-primary);

  ${mediaQuery('max', 'md')} {
    background-color: red;
  }

  ${mediaQuery('min', 'sm')} {
    background-color: orange;
  }
`;
