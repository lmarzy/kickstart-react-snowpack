import styled from 'styled-components';

import { ColorAllType } from '../../../shared/types-styles';

interface StyledColorProps {
  $color: ColorAllType;
}

export const StyledColorList = styled.ul`
  display: flex;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-4);
`;

export const StyledColor = styled.li<StyledColorProps>`
  div {
    width: 220px;
    height: 220px;
    margin-bottom: var(--spacing-2);
    background-color: ${({ $color }) => `var(--col-${$color})`};
    border-radius: 6px;
  }
`;
