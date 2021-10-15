import styled from 'styled-components';

import { Variant, Size } from './button';

interface ButtonProps {
  $variant?: Variant;
  $size?: Size;
  $isFullWidth?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $isFullWidth }) => $isFullWidth && '100%'};
  height: var(--height-${({ $size }) => $size});
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  background-color: ${({ $variant }) =>
    $variant === 'primary' ? `var(--col-primary)` : `var(--col-secondary)`};
  color: white;
`;
