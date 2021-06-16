import styled from 'styled-components';

import { ColorType } from '../../../shared/types-styles';

import { Variant, Size } from './button';

interface ButtonProps {
  $colorTheme?: ColorType;
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
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  background-color: ${({ $variant, $colorTheme }) =>
    $variant === 'solid' ? `var(--col-${$colorTheme})` : 'white'};
  border: 1px solid var(--col-${({ $colorTheme }) => $colorTheme});
  color: ${({ $variant, $colorTheme }) =>
    $variant === 'solid' ? 'white' : `var(--col-${$colorTheme})`};
`;
