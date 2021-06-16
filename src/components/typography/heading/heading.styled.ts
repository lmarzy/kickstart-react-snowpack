import styled from 'styled-components';

import { FontSizeType } from '../../../shared/types-styles';

interface StyledHeadingProps {
  $size: FontSizeType;
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-size: var(--size-${({ $size }) => $size});
  color: var(--col-blue);
`;
